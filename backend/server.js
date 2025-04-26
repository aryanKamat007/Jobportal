import app from "./app.js";
import cloudinary from "cloudinary";
import { PORT } from './utils/utils.js';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

const server = () => {
const port = PORT || 4000;

  app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
  });
}

server();
export default server;



