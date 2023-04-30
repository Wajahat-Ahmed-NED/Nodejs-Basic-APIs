// var Connection = require('tedious').Connection;
// //var Request = require('tedious').Request;
// const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken');
// var request = require('request')
//configuration files
var config = require("./utils/sqlconfig");
var sql = require("mssql");
// var connection = new Connection(config);
const axios = require("axios");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

exports.cyberops_signIn = (req, res) => {
  var email = req.body.username;
  var password = req.body.password;
  var wazuhData;
  // console.log(email, password)
  //   sql.connect(config, function (err) {
  //     if (err) {
  //       console.log("report error", err);
  //     } else {
  // var requests = new sql.Request();
  // //needs working first insert in client table then in email table
  // requests.query("SELECT * FROM [cyberOps].[dbo].[cyberops_signin2] WHERE [username]='" + email + "'",
  //     async function (error, result) {
  //         if (error) {
  //             console.log(error)
  //             return

  //         }
  //         else {
  //             console.log(result)
  //             if (result.recordset.length < 1) {
  //                 res.status(200).send("No User Registered with this email")
  //             }

  //             else {

  //                 // console.log(result)
  //                 // var ans = await bcrypt.compare(password, result.recordset[0].password);
  //                 //var ans=true
  //                 // console.log("ans", ans)

  //                 if (result.recordset[0].password === password) {

  //                     // //    axios.get("https://172.168.10.71:55000/security/user/authenticate?raw=true",{
  //                     // //     username: "wazuh-wui",
  //                     // //    password: "wazuh-wui"
  //                     // //    })
  //                     // //         .then(response => {
  //                     // //            console.log(response)
  //                     // //         })
  //                     // //         .catch((err) => {
  //                     // //             console.log(err)
  //                     // //         });

  //                     // var options = {
  //                     //     url: 'https://20.116.89.140:55000/security/user/authenticate?raw=true',
  //                     //     auth: {
  //                     //         'user': "wazuh-wui",
  //                     //         'pass': "wazuh-wui"
  //                     //     }
  //                     // };

  //                     // function callback(error, response, body) {
  //                     //     if (!error && response.statusCode == 200) {

  //                     //         console.log(body)
  //                     //         var t = body
  //                     //         var headers = {
  //                     //             'Authorization': `Bearer ${t}`,
  //                     //             rejectUnauthorized: false,
  //                     //             strictSSL: false,
  //                     //             requestCert: true,
  //                     //         };

  //                     //         var opt = {
  //                     //             url: 'https://20.116.89.140:55000/agents',
  //                     //             headers: headers
  //                     //         };

  //                     //         function call(err, resp, bod) {
  //                     //             console.log("callback function")
  //                     //             if (!err && resp.statusCode == 200) {
  //                     //                 console.log(bod);
  //                     //                 wazuhData = JSON.parse(bod)
  //                     //                 var name = result.recordset[0].name
  //                     //                 // wazuhData?.data?.affected_items.shift()|| e.group?.[1]?.toLowerCase().search(name)!== -1

  //                     //                 console.log(
  //                     //                     wazuhData?.data?.affected_items.shift())

  //                     //                 var filtered_data = wazuhData?.data?.affected_items?.filter(e => e.group?.[1] === email);
  //                     //                 if (filtered_data.length < 1) {
  //                     //                     filtered_data = wazuhData?.data?.affected_items?.filter(e => e.group?.[1]?.toLowerCase().search(name.toLowerCase()) !== -1);

  //                     //                 }

  //                     //                 console.log("Checking IGI", filtered_data)
  //                     //                 res.status(200).json({

  //                     //                     message: "Login Successful",
  //                     //                     token: body,
  //                     //                     username: result.recordset[0].name,
  //                     //                     type: result.recordset[0].type,
  //                     //                     body: result.recordset[0].type === "Super-Admin" ? wazuhData?.data?.affected_items : filtered_data,
  //                     //                 })
  //                     //                 //    responce.status(200).send(bod)
  //                     //             }
  //                     //             else {
  //                     //                 console.log(err)
  //                     //                 res.status(400).send(err)
  //                     //             }
  //                     //         }

  //                     //         request(opt, call);

  //                     //     }
  //                     //     else {
  //                     //         console.log(error)
  //                     //     }
  //                     // }

  //                     // request(options, callback);

  //                     res.status(200).json({

  //                         message: "Login Successful",
  //                         token: "body",
  //                         username: result.recordset[0].name,
  //                         type: result.recordset[0].type,
  //                         body: {body:[]},
  //                     })

  //                 }
  //                 else {
  //                     res.status(400).send("Wrong Password")
  //                 }
  //             }

  //         }
  //     })

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
  // }
};
