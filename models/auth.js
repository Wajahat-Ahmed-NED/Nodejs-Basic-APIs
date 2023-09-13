const mongoose = require("mongoose");

const { Schema } = mongoose;

const authSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Authentication",
  authSchema,
  "authentications"
);
