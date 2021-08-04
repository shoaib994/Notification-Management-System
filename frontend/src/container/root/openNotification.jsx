


//import { Container } from '@material-ui/core';
import {Row,Col} from 'react-bootstrap'
import { Container } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import logo from './unnamed.jpg'
import {Link,useParams} from 'react-router-dom'
import {AllNotification,ShowNotification} from '../../redux/index'
import {useSelector,useDispatch,connect} from 'react-redux'
const OpenNotification=()=>{
  const dispatch=useDispatch()
//   useEffect(()=>{
//     dispatch(recivedApplication()) 
// })
  const rootNotification=useSelector(state=>state.application.rootNotification)
  const NotificationId=useSelector(state=>state.application.NotificationId)
  console.log(rootNotification)
  const{iddd}=useParams()
  // alert(iddd)
  var profilePic=""
const he="heloo"
var yes={}
var tablek=rootNotification.map((val)=>{
if(val._id==iddd){
    yes=val
      
}
// console.log(val.image)
})

var purpose=yes.purpose
var str =yes.image;
str = str.replace("public", "");
   profilePic="http://localhost:5000/"+str
const[boss,setBoss]=useState('abc')



    return(
        <><br/><br/>
          

<form enctype="multipart/form-data">

       <Container>    <h1 style={{textAlign:'center',color:"Navy"}}>{purpose}</h1><br/><br/>
         <img src={profilePic} width="80%"alt="Raja"/>
      <Row>
    <Col xs={12}>
 
    
    
     
    </Col>
    
    </Row>
        <br/><br/>
      
        

      </Container>
      </form>
        </>
    )
}

const mapStatetoProps=(state)=>{
    return{
        rootNotification:state.application.rootNotification,
NotificationId:state.application.Notifi,


    }

}
const mapDispatchtoProps=(dispatch)=>{return{

}

}

export default connect(mapStatetoProps,mapDispatchtoProps)(OpenNotification);














