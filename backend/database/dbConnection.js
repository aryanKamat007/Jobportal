import mongoose from "mongoose";
import { MONGO_URI } from "../utils/utils.js";

export const dbConnection = () => {
  mongoose
    .connect(String(MONGO_URI), {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
