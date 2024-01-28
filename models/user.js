const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pasportLocalMongoose = require("passport-local-Mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

UserSchema.plugin(pasportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
