// external imports
import { Router } from 'express';

// internal imports
import {
    getUser,
    login,
    logout,
    signup
} from '../controllers/auth.controller.js';
import verifyToken from '../middlewares/auth.middleware.js';

const authRouter = Router();

// signup route
authRouter.route('/signup').post(signup);

// signin route
authRouter.route('/login').post(login);

// logout route
authRouter.route('/logout').get(logout);

// get user route
authRouter.route('/user').get(verifyToken, getUser);

export default authRouter;
