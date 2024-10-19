const User = require("../models/user-model");

// Home logic
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to InNews using Controllers");
  } catch (error) {
    console.log(error);
  }
};

// Register logic
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ message: "email already exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });
    res.status(200).send({
      msg: "registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

// Login Logic
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    const userExist = await User.findOne({ email: email });
    console.log(userExist);

    if (!userExist) {
      return res.status(401).json({ message: "Invalid Credentials madhav" });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

// to send user data - User Logic
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log("userData from backend", userData);
    return res.status(200).json({userData});
  } catch (error) {
    console.log(`error from the user root ${error}`);
  }
};

module.exports = { home, register, login, user };
