import express from 'express';
import emojiRouter from './emojis.js';
import dbConnectionSingleton from '../db-connection-singleton.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.post('/query', async (request, response) => {
  const { body } = request;
  try {
    const data = await dbConnectionSingleton.connection.all(body.query ?? '');
    return response.status(200).json(data);
  } catch (error) {
    return response.status(400).json(error.message);
  }
})

router.use('/emojis', emojiRouter);

export default router;
