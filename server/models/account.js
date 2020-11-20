const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  note: { type: String }
})

module.exports = mongoose.model('account', Account)