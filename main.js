
const express = require("express");

const cors = require("cors");
var path = require("path");
var bodyParser=require("body-parser");
const https = require("https");

var cookieParser = require("cookie-parser");
var logger = require("morgan");
const app = express();
const axios = require("axios");
const port = 1338;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// app.use(sqlinjection);  // add sql-injection middleware here

app.use(express.urlencoded({ limit: "100mb", extended: false }));
app.use(express.json({ limit: "100mb" }));
app.use(cors({ origin: true, credentials: true }));
var cyberops = require("./cyberops_login");
app.use(logger("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())



//app.use(express.static(path.join(__dirname, "public")));

// let STATIC = path.resolve(__dirname, "build");
// let INDEX = path.resolve(STATIC, "index.html");

//app.use(express.static(STATIC));
//controllers

//applicaiotn routes
app.post("/cyberops_signin", cyberops.cyberops_signIn);
app.post("/createPortalUser", cyberops.createUser)
app.get("/getUser",cyberops.getUsers)



//gophish routes
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
app.get("/getUsers", async (req, res) => {
  var config = {
    method: "get",
    url: "https://127.0.0.1:3333/api/users/",
    headers: {
      Authorization:
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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

// app.post("/createUser", async (req, res) => {
//   var obj = req.body.data;
//   console.log(obj);
//   var data = JSON.stringify({
//     role: obj.role,
//     password: obj.password,
//     username: obj.username,
//   });

//   var config = {
//     method: "post",
//     url: "https://127.0.0.1:3333/api/users/",
//     headers: {
//       Authorization:
//         "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
//       "Content-Type": "application/json",
//     },
//     data: data,
//   };

//   await axios(config)
//     .then(function (response) {
//       console.log("Checking", JSON.stringify(response.data));
//       res.status(200).json(response.data);
//     })
//     .catch(function (error) {
//       console.log("ERRor aaya ha", error);
//       console.log({ ...error.response.data });

//       res.status(400).json({ ...error.response.data });
//     });
// });
app.post("/createGroup", async (req, res) => {
  var obj = req.body;
  console.log(obj);
  var data = JSON.stringify({ name: obj.name, targets: obj.targets });

  var config = {
    method: "post",
    url: "https://127.0.0.1:3333/api/groups/",
    headers: {
      Authorization:
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
    url: "https://127.0.0.1:3333/api/smtp/?api=5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
    headers: {
      Authorization:
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
        "5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4",
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
