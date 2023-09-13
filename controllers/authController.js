const Auth = require("../models/auth");
const bcrypt = require("bcryptjs");

exports.signIn = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    if (!username || !password) {
      const response = {
        message: "Enter All Values",
      };
      return res.status(401).json(response);
    }
    // match email
    const user = await Auth.findOne({ username: username });
    console.log(user);
    if (!user) {
      const response = {
        message: "Invalid Credentials",
      };
      return res.status(401).json(response);
    }

    // match password
    // req.body.password -> hash -> match
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      const response = {
        message: "Invalid Credentials",
      };
      return res.status(401).json(response);
    }
    const response = {
      message: "Login Successful",
      username: user.username,
      name: user.name,
      age: user.age,
    };
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    const response = {
      message: "Something went wrong",
    };
    return res.status(500).json(response);
  }
};

exports.createUser = async (req, res) => {
  try {
    const { username, password, name, age } = req.body;

    try {
      // const emailInUse = await User.exists({ email });

      const usernameInUse = await Auth.exists({ username });

      console.log(usernameInUse);
      if (usernameInUse) {
        const error = {
          status: 409,
          message: "Username already registered, use another username!",
        };

        return res.status(409).json(error);
      }
      if (age < 18) {
        const error = {
          status: 409,
          message: "Only 18+ People Can Register!",
        };

        return res.status(409).json(error);
      }
    } catch (error) {
      // return next(error);
      console.log(error);
      const response = {
        message: "Something went wrong",
      };
      return res.status(409).json(response);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const userToRegister = new Auth({
        username,
        name,
        password: hashedPassword,
        age,
      });

      user = await userToRegister.save();
      return res
        .status(201)
        .json({ user: user, auth: true, message: "Successfully Registered" });
    } catch (err) {
      const response = {
        message: "Something went wrong",
      };
      return res.status(500).json(response);
    }
  } catch (error) {
    const response = {
      message: "Something went wrong",
    };
    return res.status(401).json(response);
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { username, password, newPassword, confirmPassword } = req.body;

    try {
      // const emailInUse = await User.exists({ email });
      if (!username || !password || !newPassword || !confirmPassword) {
        return res.status(401).json({ message: "Fill all the details" });
      }
      if (confirmPassword !== newPassword) {
        return res.status(401).json({ message: "Password does not match" });
      } else if (password == newPassword) {
        return res.status(401).json({
          message: "Password must be different from previous password",
        });
      }
      const user = await Auth.findOne({ username: username });
      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid Current Password" });
      }
      await Auth.updateOne(
        { username: username },
        {
          password: newPassword,
        }
      );
      return res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
      // return next(error);
      console.log(error);
      const response = {
        message: "Something went wrong",
      };
      return res.status(409).json(response);
    }
  } catch (error) {
    const response = {
      message: "Something went wrong",
    };
    return res.status(401).json(response);
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { username, name, age } = req.body;

    try {
      // const emailInUse = await User.exists({ email });
      if (!username || !name || !age) {
        return res.status(401).json({ message: "Fill all the details" });
      }
      if (age < 18) {
        return res.status(401).json({ message: "Only 18+ can register" });
      }

      await Auth.updateOne(
        { username: username },
        {
          name: name,
          age: age,
        }
      );
      return res.status(200).json({ message: "Profile updated successfully" });
    } catch (error) {
      // return next(error);
      console.log(error);
      const response = {
        message: "Something went wrong",
      };
      return res.status(409).json(response);
    }
  } catch (error) {
    const response = {
      message: "Something went wrong",
    };
    return res.status(401).json(response);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Auth.find({ _id: id });
    const response = {
      message: "Success",
      users: data,
    };
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    const response = { message: error.message };
    res.status(500).json(response);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const data = await Auth.find({});
    const response = {
      message: "Success",
      token: "body",
      users: data,
    };
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    const response = { message: error.message };
    res.status(500).json(response);
  }
};

exports.deleteUsers = async (req, res) => {
  const { id } = req.params;

  // delete blog
  // delete comments
  try {
    await Auth.deleteOne({ _id: id });
  } catch (error) {
    const response = {
      message: "Something went wrong",
    };
    console.log(error);
    return res.status(500).json(response);
  }

  return res.status(200).json({ message: "User Deleted Successfully" });
};
