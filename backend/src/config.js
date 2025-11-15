import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || 'dev-secret',
  jwtExpires: process.env.JWT_EXPIRES || '7d',
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/energenius',
  clientOrigin: process.env.CLIENT_ORIGIN || '*'
};

