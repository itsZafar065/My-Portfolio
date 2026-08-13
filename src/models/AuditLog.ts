import mongoose, { Schema, models } from "mongoose";

const AuditLogSchema = new Schema({
  action: { type: String, required: true, index: true },
  user: { type: Schema.Types.ObjectId, ref: "Admin" },
  entity: String,
  entityId: String,
  ip: String
}, { timestamps: true });

export const AuditLog = models.AuditLog || mongoose.model("AuditLog", AuditLogSchema);
