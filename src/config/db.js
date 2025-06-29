import mongoose from "mongoose";

export const connectDB = async () => {
  // 1) Read the correct variable name
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("❌ Missing MONGODB_URI in environment");
    process.exit(1);
  }

  try {
    // 2) Connect with the URI string
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database Connected");
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error}`);
    process.exit(1);
  }
};
