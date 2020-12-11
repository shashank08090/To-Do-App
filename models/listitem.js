const mongoose=require('mongoose');

const itemSchema=new mongoose.Schema({
  description:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  date:{
    type:String,
    required:true
  }
})

const Data=mongoose.model('mydata',itemSchema);

module.exports=Data;