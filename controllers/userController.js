const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { create } = require("../models/userModel");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "3d" });
};
// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // create a token
    const token = createToken(user._id);
    res.send({ email, token, id:user._id });
  } catch (error) {
    res.send({ error: error.message });
  }
};

//signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    // create a token
    const token = createToken(user._id);
    res.send({ email, token });
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
