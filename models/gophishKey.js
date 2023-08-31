const mongoose = require('mongoose');

const {Schema} = mongoose;

const gophishKeySchema = new Schema({
    key: {type: String, required: true},
    // name: {type: String, required: true},
    // password: {type: String, required: true},
    // author: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'}
},
    {timestamps: true}
);

module.exports = mongoose.model('GophishKey', gophishKeySchema, 'gophishKey');