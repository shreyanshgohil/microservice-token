import { Router } from 'express';

const router = Router();

router.get('/api/users/currentuser', (req, res, next) => {
  res.send('Hi there');
});

export { router as currentUserRouter };
