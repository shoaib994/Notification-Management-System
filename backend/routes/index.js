var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

var userModel=require('../schema/userSchema')
var notificationModel=require('../schema/notificationSchema')
var jwt = require('jsonwebtoken');

const fs = require("fs");
/* GET home page. */
var multer  = require('multer');
const model = require('../schema/userSchema');
var rn = require('random-number');
const {createWorker} = require('tesseract.js');
var date;

const worker = createWorker({
    logger: m => console.log(m),
});
// var tesseract=require('tesseract.js')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
 
  filename: function (req, file, cb) {
    cb(null, file.originalname )
  }
})
 
var upload = multer({ storage: storage })
const nodemailer=require("nodemailer")










router.patch('/updateUser', function(req, res, next) {
  var id=req.body.id
   var roll=req.body.roll
    var name=req.body.name
console.log("jop",id,name,roll)
  userModel.findById({_id:id},function(err,data){
    if(err){
      console.log(err)
      res.json({
        err:err,
        
      })
    }else{
      if(data){
       console.log(data)
        data.name=name?name:data.name;
        data.id=roll?roll:data.id;

        
        data.save().then(dsata=>{
  
          res.json({
            message:"Department is Update Successfully"
           
          })
        })
         
      
    }
    }
    
    
      })
   });







//////   Register All User API 

router.post('/signup', function(req, res, next) {
  var name=req.body.name;
  var id=req.body.id;
  var email=req.body.email;
  var password=req.body.password;
  var confirm=req.body.confirm
  var role=req.body.role
  var status=req.body.status

  console.log(name,"id",id,email,password,confirm)
  if(password !=confirm){
   return res.json({
      message:"Pasword is not Matched"
    })
  }

else{
  

  bcrypt.hash(password, 10, function(err, hash) {
    
    var model=new userModel({
      name:name,
      id:id,
      email:email,
      password:hash,
      role:role
    })

    model.save().then(user=>{
      res.json({
        message:"User is Register Successfully",
        data:user
      })
   
    }).catch(err=>{
     
      res.json({
        message:"Email is already Register"
      })
    })
});

 
}

 
});


///// Login User 

router.post('/login', function(req, res, next) {
  
  var email=req.body.name;
  var password=req.body.password
 var model =userModel.find({email:email})

 model.exec().then(data=>{

  if(data.length<1){
    res.json({
      message:"User name or Password is wrong"
    })
  }
  else{
    bcrypt.compare(password, data[0].password, function(err, result) {
      if(result){
      
       var token= jwt.sign({
          name:data[0].name,
          rollno:data[0].id,
          id:data[0]._id,
          email:data[0].email,
          image:data[0].image,
          city:data[0].city,
          role:data[0].role,
          status:data[0].status
        }, 'secret', {
          expiresIn: '1h'
        })
        res.json({
          result:result,
          data:data,
          token:token,
          message:"User is Signin Successfully"
      })


      }
else{
  res.json({
    message:"User name or Password is wrong"
  })
}



  });
  
}

})
})


 
/// Get All User Data whose Register in System


router.get('/alluser', function(req, res, next) {
  var model=userModel.find({}).select("name id role email serialnumber image resetLink code status")
  model.exec().then(data=>{
    if(data.length<1){
     res.json({
       message:"No Record Found"
     })
    }else{
     res.json({
       data:data
     })
    }
   
  })
 });
 
 /// Upload Notification
 
router.post('/notification',upload.single('image'), function(req, res, next) {
  var purpose=req.body.purpose

     var image=req.file.path
   

 var model=new notificationModel({
  
   image:image,
  purpose:purpose, 
  
 })
model.save().then(result=>{
  console.log("Save")
  res.json({
    messsage:'Notification is uploaded successfully',
    data:result
  })
}).catch(err=>{
  res.json({
    message: "Something Wrong Notification is not upload"
  })
})

});


//////  Show All Notification in Root Pannel

router.get('/allNotification', function(req, res, next) {
  var model=notificationModel.find({})
  model.exec().then(data=>{
    if(data.length<1){
     res.json({
       message:"No Record Found"
     })
    }else{
     res.json({
       data:data
     })
    }
   
  })
 });





///// This API is used To Delete Notification in Root Pannal

router.delete('/deleteNotification', function(req, res, next) {

  var id=req.body.id;

  var model=notificationModel.findByIdAndRemove({_id:id})
  model.exec().then(data=>{
      res.json({
        message:"Notification is Deleted Successfully",
        id:id,
        
      })
   
  
    })
 });

 





















 /// Update User Profile in Each Module


router.patch('/updateProfile',upload.single('profileImage'), function(req, res, next) {
  var id=req.body.id
    var name=req.body.name;
 
   var image=req.file.path

   userModel.findById(id,function(err,data){
   
    data.name=name?name:data.name;
   
     data.image=image?image:data.image
 
     data.save().then(result=>{
       res.json({
         mess:result,
         me:"Data Has been Updated Successfully"
       })
     }).catch(err=>{
       res.json({
         err:err
       })
   })
   })
 
   
 });











  
 //////// ADD New Department Only Access To Root user





 /// Update User Profile in All Pannal

router.patch('/userUpdate',upload.single('image'), function(req, res, next) {

  var id=req.body.id;

var image=req.file.path
userModel.findById({_id:id},function(err,data){
  if(err){
    res.json({
      err:err
    })
  }else{
    if(data){
     
      data.image=image?image:data.image
      data.save().then(dsata=>{

        res.json({
          message:"Data is Update Successfully",
          data:dsata
        })}).catch(err=>res.json({err:err}))
    
  }
  }
 
   
  
    })
 });



 
module.exports = router;
