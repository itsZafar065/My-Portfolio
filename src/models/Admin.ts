import mongoose, { Schema, models } from "mongoose";

const AdminSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, index: true },
  passwordHash: { type: String, required: true, select: false },
  role: { type: String, enum: ["super_admin", "editor"], default: "editor", index: true },
  status: { type: String, enum: ["active", "disabled"], default: "active", index: true },
  profileImage: String,
  lastLogin: Date
}, { timestamps: true });

export const Admin = models.Admin || mongoose.model("Admin", AdminSchema);
