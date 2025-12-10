import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firebaseUid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String },
    avatar: { type: String },
    createdAt: { type: Date, default: Date.now },
})

export const User = mongoose.model("User", UserSchema);