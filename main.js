// require("dotenv").config();
const express = require("express");
// const {sendEmail} = require('./components/email');
const cors = require("cors");
var path = require("path");

const https = require("https");
//const reqs =require("request-promise");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const app = express();
const axios = require("axios");
const port = 5000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// app.use(sqlinjection);  // add sql-injection middleware here

app.use(express.urlencoded({ limit: "100mb", extended: false }));
app.use(express.json({ limit: "100mb" }));
app.use(cors({ origin: true, credentials: true }));
var cyberops = require("./cyberops_login");
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

let STATIC = path.resolve(__dirname, "build");
let INDEX = path.resolve(STATIC, "index.html");

app.use(express.static(STATIC));
//controllers

app.get("/", function (req, res, next) {
  res.sendFile(INDEX);
});
app.get("/phishing", function (req, res, next) {
  res.sendFile(INDEX);
});

app.get("/user-page", function (req, res, next) {
  res.sendFile(INDEX);
});
app.get("/templates", function (req, res, next) {
  res.sendFile(INDEX);
});
app.get("/landing-page", function (req, res, next) {
  res.sendFile(INDEX);
});
app.get("/sending-profile", function (req, res, next) {
  res.sendFile(INDEX);
  // res.send("<h1>Hello</h1>")
});
app.get("/compaigns", function (req, res, next) {
  res.sendFile(INDEX);
});
app.get("/changePassword", function (req, res, next) {
  res.sendFile(INDEX);
});
app.get("/login", function (req, res, next) {
  res.sendFile(INDEX);
});
app.get("/compaign/:id", function (req, res, next) {
  res.sendFile(INDEX);
});

app.post("/cyberops_signin", cyberops.cyberops_signIn);
// var report = require('./components/report')

// app.post('/post', report.data)
// app.post('/user', users.udata)
// const gophishAPI='http://127.0.0.1:3333/'
app.get("/getUsers", async (req, res) => {
  var config = {
    method: "get",
    url: "https://127.0.0.1:3333/api/users/",
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/getGroups", async (req, res) => {
  var config = {
    method: "get",
    url: "https://127.0.0.1:3333/api/groups/",
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/getGroupsSummary", async (req, res) => {
  var config = {
    method: "get",
    url: "https://127.0.0.1:3333/api/groups/summary",
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/getTemplates", async (req, res) => {
  var config = {
    method: "get",
    url: "https://127.0.0.1:3333/api/templates",
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/getPages", async (req, res) => {
  var config = {
    method: "get",
    url: "https://127.0.0.1:3333/api/pages/",
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/getSendingProfile", async (req, res) => {
  var config = {
    method: "get",
    url: "https://127.0.0.1:3333/api/smtp/",
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/getCompaigns", async (req, res) => {
  var config = {
    method: "get",
    url: "https://127.0.0.1:3333/api/campaigns/",
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/getCompaignResult/:id", async (req, res) => {
  let id = req.params.id;
  var config = {
    method: "get",
    url: `https://127.0.0.1:3333/api/campaigns/${id}/results`,
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/getCompaignSummary/:id", async (req, res) => {
  let id = req.params.id;

  var config = {
    method: "get",
    url: `https://127.0.0.1:3333/api/campaigns/${id}/summary`,
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/getCompleteCompaign/:id", async (req, res) => {
  let id = req.params.id;
  console.log(id);
  var config = {
    method: "get",
    url: `https://127.0.0.1:3333/api/campaigns/${id}/complete`,
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.post("/createUser", async (req, res) => {
  var obj = req.body;
  console.log(obj);
  var data = JSON.stringify({
    role: obj.role,
    password: obj.password,
    username: obj.username,
  });

  var config = {
    method: "post",
    url: "https://127.0.0.1:3333/api/users/",
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha", error);
      console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});
app.post("/createGroup", async (req, res) => {
  var obj = req.body;
  console.log(obj);
  var data = JSON.stringify({ name: obj.name, targets: obj.targets });

  var config = {
    method: "post",
    url: "https://127.0.0.1:3333/api/groups/",
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha", error);
      console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});
app.post("/createTemplate", async (req, res) => {
  var obj = req.body;
  console.log(obj);
  var data = JSON.stringify({
    name: obj.name,
    subject: obj.subject,
    envelope_sender: obj.envelope_sender,
    text: obj.text,
    html: obj.html,
  });

  var config = {
    method: "post",
    url: "https://127.0.0.1:3333/api/templates/",
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha", error);
      console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});
app.post("/createPage", async (req, res) => {
  var obj = req.body;
  console.log(obj);
  var data = JSON.stringify({
    name: obj.name,
    html: obj.text,
    capture_credentials: obj.capture_credentials,
    capture_passwords: obj.capture_passwords,
    redirect_url: obj.redirect_url,
  });

  var config = {
    method: "post",
    url: "https://127.0.0.1:3333/api/pages/",
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha", error);
      console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});
app.post("/importSite", async (req, res) => {
  var obj = req.body;
  console.log(obj);
  var data = JSON.stringify({
    include_resources: obj.include_resources,
    url: obj.url,
  });

  var config = {
    method: "post",
    url: "https://127.0.0.1:3333/api/import/site",
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha", error);
      console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});
app.post("/importEmail", async (req, res) => {
  var obj = req.body;
  console.log(obj);
  var data = JSON.stringify({
    convert_links: obj.convert_links,
    content: obj.content,
  });

  var config = {
    method: "post",
    url: "https://127.0.0.1:3333/api/import/email",
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha", error);
      console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});
app.post("/createCompaign", async (req, res) => {
  var obj = req.body;
  console.log(obj);
  var data = JSON.stringify(obj);

  var config = {
    method: "post",
    url: "https://127.0.0.1:3333/api/campaigns/",
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha", error);
      console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});
app.post("/createSendingProfile", async (req, res) => {
  var obj = req.body;
  console.log(obj);
  var data = {
    name: obj.name,
    host: obj.host,
    from_address: obj.from_address,
    interface_type: obj.interface_type,
    headers: obj.headers,
    username: obj.username,
    password: obj.password,
    ignore_cert_errors: obj.ignore_cert_errors,
  };

  var config = {
    method: "post",
    url: "https://127.0.0.1:3333/api/smtp/?api=d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },

    data: data,
  };

  await axios(config, { agent: new https.Agent({ rejectUnauthorized: false }) })
    .then(function (response) {
      // console.log("here", response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha", error);
      // console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});

app.put("/editSendingProfile/:id", async (req, res) => {
  var obj = req.body;
  var i = req.params.id;
  console.log(obj, i);
  var data = JSON.stringify({
    ...req.body,
  });
  console.log(req.body.id);
  var config = {
    method: "put",
    url: `https://127.0.0.1:3333/api/smtp/${req.body.id}`,
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha");
      // console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});

app.put("/editUser/:id", async (req, res) => {
  var obj = req.body;
  var i = req.params.id;
  console.log(obj, i);
  var data = JSON.stringify({
    ...req.body,
  });
  console.log(req.body.id);
  var config = {
    method: "put",
    url: `https://127.0.0.1:3333/api/users/${req.body.id}`,
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha");
      // console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});

app.put("/editPage/:id", async (req, res) => {
  var obj = req.body;
  var i = req.params.id;
  console.log(obj, i);
  var data = JSON.stringify({
    name: obj.name,
    html: obj.html,
    ...req.body,
  });
  console.log(req.body.id);
  var config = {
    method: "put",
    url: `https://127.0.0.1:3333/api/pages/${req.body.id}`,
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha");
      // console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});

app.put("/editGroup/:id", async (req, res) => {
  var obj = req.body;
  var i = req.params.id;
  console.log(obj, i);
  var data = JSON.stringify({
    id: obj.id,
    name: obj.name,
    targets: obj.targets,
  });
  console.log(req.body.id);
  var config = {
    method: "put",
    url: `https://127.0.0.1:3333/api/groups/${req.body.id}`,
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha");
      // console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});

app.put("/editTemplate/:id", async (req, res) => {
  var obj = req.body;
  var i = req.params.id;
  console.log(obj.name, obj.envelope_sender);
  var data = JSON.stringify({
    id: obj.id,
    name: obj.name,
    text: obj.text,
    html: obj.html,
    subject: obj.subject,
    envelope_sender: obj.envelope_sender,
    ...req.body,
  });
  console.log(req.body.id);
  var config = {
    method: "put",
    url: `https://127.0.0.1:3333/api/templates/${req.body.id}`,
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      // console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha");
      // console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});

app.delete("/deleteGroup/:id", async (req, res) => {
  var obj = req.params;
  console.log(req.params.id);
  console.log(obj);

  var config = {
    method: "delete",
    url: `https://127.0.0.1:3333/api/groups/${obj.id}`,
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha", error);
      console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});
app.delete("/deleteTemplate/:id", async (req, res) => {
  var obj = req.params;
  console.log(req.params.id);
  console.log(obj);

  var config = {
    method: "delete",
    url: `https://127.0.0.1:3333/api/templates/${obj.id}`,
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha", error);
      console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});
app.delete("/deleteCompaign/:id", async (req, res) => {
  var obj = req.params;
  console.log(req.params.id);
  console.log(obj);

  var config = {
    method: "delete",
    url: `https://127.0.0.1:3333/api/campaigns/${obj.id}`,
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha", error);
      console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});
app.delete("/deletePage/:id", async (req, res) => {
  var obj = req.params;
  console.log(req.params.id);
  console.log(obj);

  var config = {
    method: "delete",
    url: `https://127.0.0.1:3333/api/pages/${obj.id}`,
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha", error);
      console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});
app.delete("/deleteSendingProfile/:id", async (req, res) => {
  var obj = req.params;
  console.log(req.params.id);
  console.log(obj);

  var config = {
    method: "delete",
    url: `https://127.0.0.1:3333/api/smtp/${obj.id}`,
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha", error);
      console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});
app.delete("/deleteUser/:id", async (req, res) => {
  var obj = req.params;
  console.log(req.params.id);
  console.log(obj);

  var config = {
    method: "delete",
    url: `https://127.0.0.1:3333/api/users/${obj.id}`,
    headers: {
      Authorization:
        "d05ce705ff99d7fefd1f5a28d094cc5ef0a9b7b528f4f32da43138a96e7ea523",
      "Content-Type": "application/json",
    },
  };

  await axios(config)
    .then(function (response) {
      console.log("Checking", JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log("ERRor aaya ha", error);
      console.log({ ...error.response.data });

      res.status(400).json({ ...error.response.data });
    });
});

app.listen(port);
