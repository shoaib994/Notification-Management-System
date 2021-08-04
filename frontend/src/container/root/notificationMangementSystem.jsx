
//import { Container } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import {TextField,form, Container,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
 import {Alert} from 'react-bootstrap'
  
import {Row,Col,Image,Form } from 'react-bootstrap'
import logo from '../../a.jpg'
import {ADDNotification} from '../../redux/index'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const NotificationMangementSystem=()=>{
  var messageNotification=useSelector(state=>state.application.messageNotification)
  const dispatch=useDispatch()
  const[cc,setCC]=useState('')
  var bazar=''
//  var bazar
const he="heloo"

  const[image,setImage]=useState('')
  const[purpose,setPurpose]=useState('')
  const[message,setMesssage]=useState('')
  const[newMessage,setNewMessage]=useState('')


  const applicationSubmit=(purpose,image)=>{

    if(purpose==''||image==''){
      // queMessage="Please Fill All The Boxes"
       setNewMessage("Please Fill All The Boxes")
      
     }else{ 
      dispatch(ADDNotification(purpose,image))
      console.log(messageNotification)
      
         setNewMessage('Notification is uploaded successfully')
         setPurpose('')
         setImage('')
     }
  



  }

if(newMessage=="Notification is uploaded successfully"){
  //  alert("boss")
 
 var btn=<><Alert  variant="success" style={{color:'black',fontSize:20}}>{newMessage}</Alert></>

} else if(newMessage=='Please Fill All The Boxes'){
   
    btn=<Alert  variant="danger" style={{color:'black',fontSize:20}}>{newMessage}</Alert>
  }
 else{
   btn=""
 }

  


    return(
        <><br/><br/>
         
          {/* <Alert  variant="danger">{message}</Alert> */}
    
<form enctype="multipart/form-data">

       <Container>
        
      <Row>
    <Col sm={4} xs={12}>
      <Image src={logo} rounded style={{width:"200px"}}/>
    </Col>
    <Col sm={6} xs={12}>
      <div>

         
          <h1>Notification Mangement System </h1>
    
      </div>
    </Col>
    <Col xs={2}>
     
    </Col>
    
    </Row>
        <br/>
      
        <br/>
        {btn}<br/>
        <Row>
        <Col md={2}></Col>
        <Col md={8} sm={12}><TextField value={purpose}  onChange={(e)=>setPurpose(e.target.value)} label="Purpose Of Notification" style={{width:'100%'}} /></Col>
        <Col md={2}></Col>
        </Row><br/><br/><br/><br/>
       
   
        <Row>
        <Col md={2}></Col>
            <Col md={8} sm={12}>
                <h5 style={{float:'left'}}>Import Student Application</h5><br/><br/>
            <Form.Group >
               <Form.File id="image"  name="image" style={{width:'100%'}} onChange={(e)=>setImage(e.target.files[0])} />
              </Form.Group>
            </Col>
            <Col md={2}></Col>
           
        </Row><br/><br/>
      

        
      <br/><br/>
<Button style={{ background: 'Navy',color:'white',padding:'15px'}} onClick={()=>applicationSubmit(purpose,image)}>Upload</Button>

        <br/><br/>
      </Container>
      </form>
        </>
    )
}

export default NotificationMangementSystem