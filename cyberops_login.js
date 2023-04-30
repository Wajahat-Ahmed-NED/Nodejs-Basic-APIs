process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

exports.cyberops_signIn = (req, res) => {
  var email = req.body.username;
  var password = req.body.password;

  if (email === "admin" && password === "admin@123") {
    res.status(200).json({
      message: "Success",
      token: "body",
      username: "Admin",
      type: "SuperUser",
    });
  } else {
    res.status(400).json({ message: "Invalid Credentials" });
  }
};
