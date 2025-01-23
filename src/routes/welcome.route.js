// external imports
import { Router } from 'express';

// internal imports
import { welcome } from '../controllers/welcome.controller.js';

const welcomeRouter = Router();

// welcome route
welcomeRouter.get('/', welcome);

export default welcomeRouter;
