import { Router } from 'express';

const router = Router();

router.post('/api/users/signout', (req, res, next) => {
  res.send('Hi there');
});

export { router as signOutRouter };
