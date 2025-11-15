import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { config } from '../config.js';
import { loginSchema, registerSchema, initSchema } from '../utils/validators.js';
import { requireAuth } from '../middleware/auth.js';

export const authRouter = express.Router();

function signToken(user) {
  return jwt.sign({ id: user._id, email: user.email }, config.jwtSecret, {
    expiresIn: config.jwtExpires,
  });
}

authRouter.post('/register', async (req, res) => {
  try {
    const data = registerSchema.parse(req.body);
    const exists = await User.findOne({ email: data.email });
    if (exists) return res.status(409).json({ message: 'Email déjà utilisé' });
    const hash = await bcrypt.hash(data.password, 10);
    const user = await User.create({
      firstName: data.firstName,
      lastName: data.lastName,
      company: data.company || undefined,
      email: data.email,
      passwordHash: hash,
    });
    const token = signToken(user);
    return res.status(201).json({ token, user: publicUser(user) });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

authRouter.post('/login', async (req, res) => {
  try {
    const data = loginSchema.parse(req.body);
    const user = await User.findOne({ email: data.email });
    if (!user) return res.status(401).json({ message: 'Identifiants invalides' });
    const ok = await bcrypt.compare(data.password, user.passwordHash);
    if (!ok) return res.status(401).json({ message: 'Identifiants invalides' });
    const token = signToken(user);
    return res.json({ token, user: publicUser(user) });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

authRouter.get('/me', requireAuth, async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ message: 'Not found' });
  return res.json({ user: publicUser(user) });
});

authRouter.post('/init', requireAuth, async (req, res) => {
  try {
    const data = initSchema.parse({ plan: req.body.plan, boxes: Number(req.body.boxes) });
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { plan: data.plan, boxes: data.boxes },
      { new: true }
    );
    return res.json({ user: publicUser(user) });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

function publicUser(u) {
  return {
    id: u._id,
    firstName: u.firstName,
    lastName: u.lastName,
    company: u.company || null,
    email: u.email,
    plan: u.plan,
    boxes: u.boxes,
    createdAt: u.createdAt,
  };
}
