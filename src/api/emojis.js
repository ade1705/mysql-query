import express from 'express';

const emojiRouter = express.Router();

emojiRouter.get('/', (req, res) => {
  res.json(['😀', '😳', '🙄']);
});

export default emojiRouter;
