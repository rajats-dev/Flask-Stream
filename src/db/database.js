import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`
    );

    // app.on("error", (error) => {
    //   console.log("Error", error);
    //   throw error;
    // });

    // app.listen(PORT, () => {
    //   console.log("Server has started");
    // });
  } catch (error) {
    console.log("Mongo DB Connection Failed :", error);
    process.exit(1);
  }
};
