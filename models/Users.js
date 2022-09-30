const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  timeFrom: {
    type: String,
    required: true,
  },
  timeTo: {
    type: String,
    required: true,
  },
});
const UserModel = mongoose.model("users", UsersSchema);
module.exports = UserModel;
