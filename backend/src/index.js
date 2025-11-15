import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config.js';
import { authRouter } from './routes/auth.js';

async function main() {
  await mongoose.connect(config.mongoUrl);
  const app = express();

  app.use(morgan('dev'));
  app.use(express.json());
  app.use(
    cors({
      // Autoriser tous les origins (y compris file:// via absence d'origin) et refléter l'origine quand présente
      origin: (origin, callback) => callback(null, true),
      methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
      allowedHeaders: ['Content-Type','Authorization']
    })
  );

  app.get('/health', (_req, res) => res.json({ status: 'ok' }));
  app.use('/api/auth', authRouter);

  app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal error' });
  });

  app.listen(config.port, () => {
    console.log(`API running on http://localhost:${config.port}`);
  });
}

main().catch((e) => {
  console.error('Failed to start API', e);
  process.exit(1);
});
