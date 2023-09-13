const mongoose = require("mongoose");

const { Schema } = mongoose;

const gophishKeySchema = new Schema(
  {
    key: { type: String, required: true },
    ip: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("GophishKey", gophishKeySchema, "gophishKey");
