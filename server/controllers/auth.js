const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;


const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    const savedUser = await newUser.save();
    const token = createToken(newUser._id);
    
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    console.log(token)
    res.status(201).json({ user: newUser._id });
  } catch (err) {
    res.status(500).json({ error: err.massage });
  }
};



////////////////signin///////////////
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email)
    const user = await User.findOne({ email: email });
    console.log(user)
    if (!user) return res.status(400).json({ msg: "User does not exist" });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = createToken(user._id);
   
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    delete user.password;

    res.status(200).json({ user: user._id });
  } catch (err) {
    res.status(500).json({ error: err.massage });
  }
};
const createToken = (id) => {

  return jwt.sign({ id }, "secretstringveryverymuch", {
    expiresIn: maxAge,
  });
};
module.exports = { signup, signin };
