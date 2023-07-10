import { Router } from 'express';

const router = Router();

router.post('/api/users/signin', (req, res, next) => {
  res.send('Hi there');
});

export { router as signInRouter };
