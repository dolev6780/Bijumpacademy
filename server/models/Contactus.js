const mongoose = require("mongoose");
const emailValidator = require("validator");
const ContactusSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter a full name"],
    min: 2,
    max: 50,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, "Please enter a phone number"],
    min: 10,
    max: 10,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    max: 50,
    lowercase: true,
  },
  textArea: {
    type: String,
    required: [true, "Please enter a text"],
    min: [1, "Minimum text length is 1 characters"],
    max: [50, "Maximum text length is 50 characters"],
  },
});

//statics methods
//register method
ContactusSchema.statics.contactus = async function (
  fullName,
  phone,
  email,
  textArea
) {
  if (!email || !phone || !fullName || !textArea) {
    throw Error("fields must be filled");
  }
  if (!emailValidator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  console.log(fullName, phone, email, textArea);
  const newContact = await this.create({
    fullName,
    phone,
    email,
    textArea,
  });
  return newContact;
};

const Contactus = mongoose.model("Contactus", ContactusSchema);
module.exports = Contactus;
