import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const connectDB = async () => {
  try {
    // Connect using the full URI from .env
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Proper template literal for console.log
    console.log(`\nMongoDB connected successfully ✅ Host: ${connectionInstance.connection.host}`);
  } catch (err) {
    console.error("\nMongoDB connection failed ❌");
    console.error(err);
    process.exit(1); // exit on failure
  }
};

export default connectDB;