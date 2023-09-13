const mongoose = require("mongoose");

const { Schema } = mongoose;

const activityLogSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  timestamp: { type: Date, default: Date.now },
  action: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model(
  "ActivityLog",
  activityLogSchema,
  "activityLog"
);
