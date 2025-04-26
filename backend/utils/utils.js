import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGODB_URI;
const CLOUDINARY_CLIENT_NAME  = process.env.CLOUDINARY_CLIENT_NAME;
const CLOUDINARY_CLIENT_API = process.env.CLOUDINARY_CLIENT_API;
const CLOUDINARY_CLIENT_SECRET = process.env.CLOUDINARY_CLIENT_SECRET;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
const COOKIE_EXPIRE = process.env.COOKIE_EXPIRE;
const FRONTEND_URL = process.env.FRONTEND_URL;
const NODE_ENV = process.env.NODE_ENV;

export {
    MONGO_URI,
    PORT,
    CLOUDINARY_CLIENT_NAME,
    CLOUDINARY_CLIENT_API,
    CLOUDINARY_CLIENT_SECRET,
    JWT_SECRET_KEY,
    JWT_EXPIRES_IN,
    COOKIE_EXPIRE,
    FRONTEND_URL,
    NODE_ENV,
  };