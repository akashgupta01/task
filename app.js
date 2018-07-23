//require middleware
const express = require("express");
const bodyparser = require("body-parser");
const app=express();
const mongoose = require('mongoose');
const Db  = require('pg')
const pg_promise = require('pg-promise');


// const connectionString = 'postgres://rzqvfake:B2lf7C35uz7nZj1aZBsUbkzYZaumw2Oo@stampy.db.elephantsql.com:5432/rzqvfake'

// const db = new Db({
//   connectionString: connectionString,
// });

// var QUERY = "CREATE TABLE account( "+
//  "user_id serial PRIMARY KEY,"+
//  "username VARCHAR (50) UNIQUE NOT NULL,"+
//  "password VARCHAR (50) NOT NULL,"+
//  "email VARCHAR (355) UNIQUE NOT NULL,"+
//  "created_on TIMESTAMP NOT NULL,"
//  "last_login TIMESTAMP "+
// ");";

// db.query(QUERY, (err, res) => {
//   console.log(err, res)
//   if(res){
//   console.log("sucessful");
//   }
//   if(err){
// console.log("not sucessful");
//   }
//   else{
//   	console.log("not connect");
//   }
//   pool.end();
// })
//port variable
const port =4000;
// mongo-db connection string
// var UserSchema = mongoose.Schema({
//   username: String
//   password : String
//   email : String
//   mobile_no : number
// });

const connectionurl=12



// const murl="mongodb://<akashgupta>:<akash12345>@ds147461.mlab.com:47461/autosum_db"
// mongoose.connect(murl,(err,db)=>{
//  if(err){
//  	console.log('error in db');
//  }
//  else{
//   //  const mongodb=db.db("autosum_db");
//   // mongodb.createCollection("user_details", function(err, res) {
//   //     if (err){throw err};
//   //     console.log("Collection created!");
//   //    });
//      console.log("connection sucessful")
//  }

// });

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: false }));
 // var name=[];
 // var password=[];

// app.get('*',(req,res)=>{
// 	res.render(400);
// })

// app.get('*',(req,res)=>{
//  var name="rahul"
//  res.render('home');
// });

app.get('/login',(req,res)=>{

 res.render('home');
});


app.get('/getData',(req,res)=>{

    res.send(JSON.stringify({value: 1}));
});

app.post('/getData',(req,res)=>{
 var date= req.body.date;
 var cat= req.body.cat;
 var product = req.body.product;
 console.log('date'+date);
 console.log('cat'+cat);
 console.log('pro'+product);


});


app.post('/register',(req,res)=>{
  
   res.render('home',{data})

})


app.get('/main',(req,res)=>{

   res.render('m-exp')

})




app.post('/login',(req,res)=>{

   res.render('home')

})


app.listen(port, ()=>{
	console.log('http://localhost:4000/test');
})
