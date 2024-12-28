import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/project-2");
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};