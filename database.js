const mongoose = require("mongoose");
// const {MONGODB_CONNECTION_STRING} = require('../config/index');

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(
      "mongodb+srv://wajahat:wajahat@gophish.2qxkrvk.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`Database connected to host: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
//mongodb+srv://wajahatahmed:Waja123@cluster0.dy6dnz4.mongodb.net/coinbase?retryWrites=true&w=majority
module.exports = dbConnect;
