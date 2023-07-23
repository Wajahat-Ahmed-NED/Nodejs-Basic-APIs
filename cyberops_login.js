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
sql.connect(config, function(error){
  if (error){
console.log(error)
  }
  else{
      var requ = new sql.Request();
      requ.query(`INSERT INTO [cyberOps].[dbo].[cyberops_signin2] VALUES ('${userDetails.email}','${userDetails.password}','${userDetails.name}','${userDetails.type}','${userDetails.wazuh}','${userDetails.gophish}')`,function(er,result){
         if (er){
            console.log(er)
           res.status(400).send("Something went wrong")
         }
         else{
// console.log("user created Sucessfully")
// resp.status(200).json({
//   message: "User Created",
//   token: "body",
// });

// need to work on this
const data ={
  role:'User',
  username:userDetails.email,
  password:userDetails.password
}

axios.post('http://192.168.2.104:1338/createUser',{
  data
})
.then(res=>{
console.log("gophish",res)
})
.catch(errors=>{
console.log("gohphish",errors)
})


         }
      })
      
  }
})

}

exports.getUsers = (request,response)=>{
  sql.connect(config,function(error){
    if (error){
 console.log(error)
    }
    else{
      var requ = new sql.Request();
        requ.query('SELECT username,type,name,wazuh,gophish FROM [cyberOps].[dbo].[cyberops_signin2]',function(er,result){
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