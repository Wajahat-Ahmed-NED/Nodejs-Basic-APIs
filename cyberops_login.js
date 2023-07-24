process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var request = require('request');
var config = require('./sql/sql')
var sql = require("mssql");
const axios = require("axios");




exports.cyberops_signIn = (req, res) => {
  var email = req.body.username;
  var password = req.body.password;
  console.log(email,password)
  sql.connect(config,function(error){
    if (error){
 console.log(error)
    }
    else{
      var requ = new sql.Request();
        requ.query(`SELECT password,type,name FROM [cyberOps].[dbo].[cyberops_signin2] WHERE [username] ='${email}'`,function(er,result){
           if (er){
              console.log(er)
           }
           else{

if(result.recordset==null || result.recordset=='' || result.recordset==undefined)
{
  res.status(400).json({ message: "Invalid Credentials" });
}

else
{
  var comp_pass=result.recordset[0].password
  var usertype=result.recordset[0].type
  var name = result.recordset[0].name
  
if(password==comp_pass){
   res.status(200).json({
      message: "Success",
      token: "body",
      username: name,
      type: usertype,
    });
}
else{
  res.status(400).json({ message: "Invalid Credentials" });
}
 

}
           }
        })
        
    }
})

};

exports.createUser= (requt,resp)=>{

var userDetails=requt.body.userdetails

console.log(userDetails)
let data = JSON.stringify({
  "role": "user",
  "password": userDetails.password,
  "username": userDetails.email
});

let configuration = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://127.0.0.1:3333/api/users/',
  headers: { 
    'Authorization': '5ca8b6438bddf6f603ef67882376a04ce8fd168f1100482748c4ce694e90faf4', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(configuration)
.then((response) => {
  console.log((response.data.api_key));
  const gophish_api_key=response.data.api_key;
  sql.connect(config, function(error){
    if (error){
      resp.status(403).send("Something went wrong")
    }
    else{
        var requ = new sql.Request();
        requ.query(`INSERT INTO [cyberOps].[dbo].[cyberops_signin2] VALUES ('${userDetails.email}','${userDetails.password}','${userDetails.name}','${userDetails.type}','${userDetails.wazuh}','${userDetails.gophish}','${gophish_api_key}','none')`,function(er,result){
           if (er){
             resp.status(401).send("Something went wrong")
           }
           else{
            resp.status(200).send("User created sucessfully")
          }
        })
      }
    })
})
.catch((error) => {
  console.log("error gophish",error.response.data.message);
  resp.status(400).send(error.response.data.message)
});

// console.log("user created Sucessfully")
// resp.status(200).json({
//   message: "User Created",
//   token: "body",
// });

}

exports.getUsers = (request,response)=>{
  sql.connect(config,function(error){
    if (error){
 console.log(error)
    }
    else{
      var requ = new sql.Request();
        requ.query('SELECT username,type,name,wazuh,gophish,gophishapikey,wazuhapikey FROM [cyberOps].[dbo].[cyberops_signin2]',function(er,result){
           if (er){
              console.log(er)
           }
           else{
console.log(result.recordset)
  
   response.status(200).json({
      message: "Success",
      token: "body",
     users:result.recordset
    });


           }
        })
        
    }
})
}