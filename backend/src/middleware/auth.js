import jwt from 'jsonwebtoken';
import { config } from '../config.js';

export function authOptional(req, _res, next) {
  const token = extractToken(req);
  if (token) {
    try {
      req.user = jwt.verify(token, config.jwtSecret);
    } catch (_) {}
  }
  next();
}

export function requireAuth(req, res, next) {
  const token = extractToken(req);
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try {
    req.user = jwt.verify(token, config.jwtSecret);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

function extractToken(req) {
  const header = req.headers['authorization'];
  if (header && header.startsWith('Bearer ')) return header.slice(7);
  return null;
}
