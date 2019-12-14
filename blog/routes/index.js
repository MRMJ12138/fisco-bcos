var express = require('express');
var router = express.Router();

/* GET home page. */

  router.get('/', function (req, res) {
    res.render('index', { title: '主页' });
  });
  
  router.get('/send', function (req, res) {
    res.render('send', { title: '发账' });
  });
  router.post('/send', function (req, res) {
var oweto = req.body.oweto,
    amount = req.body.amount,
time = req.body.time,
    weight = req.body.weight,
pid = req.body.pid;

  var http=require('http');
  var arr = [];
  arr.push(oweto);
  arr.push(amount);
  arr.push(time);
arr.push(weight);
arr.push(pid);
 var post_data = {
    "useAes":false,
    "user":0x2f5f666b076e44f95d817f494d81d7e16a81b98e,
    "contractName":"DebtTrans",
    "contractAddress":0x59d3aeb645a1b5c9c1b6eb03990d9e4bd40d5ec7,
    "funcName":"issue_iou",
    "funcParam":arr,
    "groupId" :"1"
};   
 
var content=JSON.stringify(post_data);

 var options = {
    hostname: 'www.baidu.com',
    //port: 5002,
    //path: '/WeBASE-Front/trans/handle',
    method: 'POST',
    headers:{"Content-type":"application/json"}
  };
console.log("post options:\n",options);
console.log("content:",content);
console.log("\n");

var req = http.request(options, function(res) {
 
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);
 
  var _data='';
 
  res.on('data', function(chunk){
     _data += chunk;
  });
 
  res.on('end', function(){
     console.log("\n--->>\nresult:",_data) 
   }); 
});

req.write(content);
req.end();
res.redirect('/send');
  });
  
router.get('/transfer', function (req, res) {
    res.render('transfer', { title: '债务转让' });
  });
  
router.post('/transfer', function (req, res) {
  var amount = req.body.amount,
    receiver = req.body.receiver;

  var http=require('http');
  var arr = [];
  arr.push(receiver);
  arr.push(amount);

 var post_data = {
    "useAes":false,
    "user":account,
    "contractName":"DebtTrans1",
    "contractAddress":caddr,
    "funcName":"TransferDebtReceipt",
    "funcParam":arr,
    "groupId" :"1"
};   
 
var content=JSON.stringify(post_data);

 var options = {
    hostname: '127.0.0.1',
    port: 5002,
    path: '/WeBASE-Front/trans/handle',
    method: 'POST',
    headers:{"Content-type":"application/json"}
  };
console.log("post options:\n",options);
console.log("content:",content);
console.log("\n");

var req = http.request(options, function(res) {
 
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);
 
  var _data='';
 
  res.on('data', function(chunk){
     _data += chunk;
  });
 
  res.on('end', function(){
     console.log("\n--->>\nresult:",_data) 
   }); 
});

req.write(content);
req.end();
res.redirect('/transfer');
  });
  
  router.get('/accept', function (req, res) {
    res.render('accept', { title: '收帐' });
  });
  router.post('/accept', function (req, res) {
  });
  
  router.get('/loan', function (req, res) {
    res.render('loan', { title: '贷款' });
  });
  router.post('/loan', function (req, res) {
  });
  

module.exports = router;
