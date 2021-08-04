

import React, { useState } from 'react';
import {Alert} from 'react-bootstrap'
import {Form,Button,Container,Image} from 'react-bootstrap'

import {connect, useSelector} from 'react-redux'
 import {TextField,form} from '@material-ui/core'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import logo from '../../1.jpg'
const Axios = require('axios')

class UserProfile extends React.Component{


    state={
        
        name:this.props.username,
        email:this.props.email,
        city:this.props.city,
        profileImage:this.props.image,
        uploadedFile:null,
        userDetail:{},
        message:"",
        id:this.props.id,
        newName:"",
        imgRes:'',
        imageSupport:'Only PNG,JPG,JPEG file supported'
        
    }
    componentDidMount(){
      var option = {
        url: "http://localhost:5000/alluser",
        method: "GET",
        
      };
      Axios(option).then(res=>{
        this.setState({userDetail:res.data.data})
      
        this.state.userDetail.map((data)=>{
 
 
 if(data._id==this.state.id){
 
  
  this.setState({
  
  
    profileImage:data.image
  })
 }
        })
      }).catch(err=>console.log(err))
    }
    ChangeprofileHandler=(event)=>{
      console.log(event.target.files[0].name)
      if (!event.target.files[0].name.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/)) {
        // setImageSupport('File is Not Supported')
        this.setState({imgRes:"File is Not Supported"})
       
       return false
       }else{
        this.setState({imgRes:" "})
        this.setState({uploadedFile:event.target.files[0]})
       }
        
    }
    changeHandler=(event)=>{
        
        this.setState({name:event.target.value})
        
       
    }
  
  changeCityHandler=(event)=>{
   
    this.setState({city:event.target.value})
    
   
}
changeEmailHandler=(event)=>{
 
  this.setState({email:event.target.value})
  
 
}

    profileHandler=(e)=>{
      
     e.preventDefault()
     var form = new FormData();
    
     form.append("profileImage", this.state.uploadedFile);
     form.append("id", this.props.id);
     
     var settings = {
       url: "http://localhost:5000/updateProfile",
       method: "PATCH",
       timeout: 0,
       processData: false,
       mimeType: "multipart/form-data",
       contentType: false,
       data: form
     };

Axios(settings).then(res=>{

  this.setState({
    message:"Profile Picture hase been updated"
  })
  const data=res.data.mess.name
  const dataImage=res.data.mess.image
 
  
  this.setState({
    profileImage:dataImage,
    
  })


}).catch(err=>console.log(err))




//   
     
    }
render(props){

    if(this.state.profileImage){
      var str = this.state.profileImage;
      str = str.replace("public", "");
        var profilePic="http://localhost:5000/"+str
    }else{
        profilePic=logo
    }
    if(this.state.newName){
 
     var abc=this.state.newname
  
    }else{
       
    }
    if(this.state.message){
      var btn=<><Alert  variant="success">{this.state.message}</Alert></>
      }else{
        btn=""
      }
    return<>
    <Container><br/>
   
    
    {/* <h5>{this.state.message}</h5> */}
<h1 style={{ color: 'Navy'}}> User Profile </h1>
<br/>
<Image src={profilePic}  alt="Image" style={{width:'25%',height:'40%'}} roundedCircle  /><br/><br/>

<br/>
{btn}<br/>
    <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
        <form  noValidate autoComplete="off">
       
  <TextField id="standard-basic" value={this.state.name} label="User Name" style={{width:'90%'}} /><br/><br/><br/>
  <TextField id="standard-basic" value={this.state.email} label="User Email" style={{width:'90%'}} /><br/><br/><br/>
  <p style={{color:'red',fontSize:12,float:'left'}}>{this.state.imgRes}</p>

  <TextField id="standard-basic" type="file" onChange={this.ChangeprofileHandler} label="User Email" style={{width:'90%'}} />
  
  <p style={{fontSize:11,marginTop:5}}>{this.state.imageSupport}</p><br/><br/><br/>
  <Button  onClick={this.profileHandler} style={{backgroundColor:'Navy'}}>Change Profile</Button>

</form>
        </div>
        <div className="col-sm-3"></div>
    </div>
        <br/><br/>

</Container>

    </>
}
}

const mapStatetoProps=(state)=>{
  return{
      id:state.user.token.id,
      username:state.user.token.name,
     
      email:state.user.token.email,
      image:state.user.token.image
  }
}
const mapDispatchToProps=(dispatch)=>{return{
 
}
}

export default connect(mapStatetoProps,mapDispatchToProps)(UserProfile)
// export default SignUp










// import React from 'react'
// import {Link, Route} from 'react-router-dom'
// import {Image} from 'react-bootstrap'
// import {TextField,form, Container,Button} from '@material-ui/core'
// //import HodHome from './hodHome'
// import {logoutAccount} from '../../redux/index'
// import {useDispatch, useSelector} from 'react-redux'
// import {makeStyles} from '@material-ui/styles'
// import logo from '../../1.jpg'
// const useStyles = makeStyles({
//     root: {
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//       border: 0,
//       borderRadius: 3,
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       color: 'white',
//       height: 48,
//       padding: '0 30px',
//     },
//   });
// const AdminUserProfile=()=>{
//     const name=useSelector((state)=>state.user.token.name)
//     const email=useSelector((state)=>state.user.token.email)
//     const classes = useStyles();
//     return(
//         <>
//         <Container>
{/* <br/>
<h1 style={{ color: 'Navy'}}> User Profilee</h1>
<br/>
<Image src={logo} alt="Image" style={{width:'25%',height:'30%'}} roundedCircle  />
<br/><br/>
    <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
        <form  noValidate autoComplete="off">
  <TextField id="standard-basic" value={name} label="User Name" style={{width:'80%'}} /><br/><br/><br/>
  <TextField id="standard-basic" value={email} label="User Email" style={{width:'80%'}} /><br/><br/><br/>
  
 

</form>
        </div>
        <div className="col-sm-3"></div>
    </div> */}
//     </Container>
//         </>
//     )
// }

// export default AdminUserProfile