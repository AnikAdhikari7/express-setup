// external imports
import mongoose from 'mongoose';

// internal imports
import { DB_NAME } from '../utils/constants.js';

const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';

// connection instance
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${mongodbUri}/${DB_NAME}`
        );

        console.log(
            `\n🌩️  MongoDB connected || DB HOST: ${connectionInstance.connection.host}\n`
        );
    } catch (err) {
        console.error('MongoDB connection FAILED: ', err);
        process.exit(1);
    }
};

export default connectDB;
