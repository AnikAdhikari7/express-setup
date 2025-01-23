// external imports
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import logger from './utils/logger.js';

// internal imports
import { API_V, MAX_LIMIT } from './utils/constants.js';

// app initialization
const app = express();


// logging with morgan
(() => {
    const morganFormat = ':method :url :status :response-time ms';
    app.use(
        morgan(morganFormat, {
            stream: {
                write: (message) => {
                    const logObject = {
                        method: message.split(' ')[0],
                        url: message.split(' ')[1],
                        status: message.split(' ')[2],
                        responseTime: message.split(' ')[3],
                    };
                    logger.info(JSON.stringify(logObject));
                },
            },
        })
    );
})()

// middlewares
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);
app.use(express.json({ limit: MAX_LIMIT }));
app.use(express.urlencoded({ extended: true, limit: MAX_LIMIT }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import welcomeRouter from './routes/welcome.route.js';

// routes declaration
app.use(API_V + '/welcome', welcomeRouter);

export default app;
