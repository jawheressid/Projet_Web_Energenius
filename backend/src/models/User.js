import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    company: { type: String },
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    plan: { type: String, enum: ['starter', 'professional', 'enterprise'], default: 'starter' },
    boxes: { type: Number, default: 1 }
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);

