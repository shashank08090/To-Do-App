const express=require('express');
const path=require('path');
const port=3030;

const app=express();
require('./config/mongoose');
require('./models/listitem');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use('/',require('./routes'));
app.use(express.static(__dirname + '/aset'));

app.listen(port,function(err){
  if(err){
    console.log('Error in opening server');
    return ;
  }
  console.log('server is on');
  return;
})