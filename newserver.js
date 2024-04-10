const http = require("http");
const express = require("express");

const app = express();

const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body.value);

  // let num1 = parseInt(req.body.num1);
  // let num2 = parseInt(req.body.num2);

  let fname = (req.body.fname);
  let lname = (req.body.lname);
  let age = parseInt(req.body.age);



  let yes =" you can vote";
  let no =" you can not vote";
  let err = "please enter valid age"



  if(age<=0 || age>=120){

    res.status(200).send({
      result : err,
    });
  
  }
  else{
   
  if(age<=18){
    res.status(200).send({
      first_name : fname,
      last_name : lname,
    result : no,
  });
  }
  else{
    res.status(200).send({
      first_name : fname,
      last_name : lname,
    result : yes,
  });
  }
  }
  // else{
  //   res.status(200).send({
  //     first_name : fname,
  //     last_name : lname,
  //     result : no,
  //   });
  // }

  // res.status(200).send({
  //   ans : sum,
  // });
});

http.createServer(app).listen(2090);
