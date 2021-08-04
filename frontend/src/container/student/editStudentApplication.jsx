


// //import { Container } from '@material-ui/core';
// import React,{useState,useEffect} from 'react';
// import {TextField,form, Container,Button} from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles';
 
//   import MenuItem from '@material-ui/core/MenuItem';
// import {Row,Col,Image,Form } from 'react-bootstrap'
// // import logo from '../a.jpg'
// import {editHod,editAdmin,editHoJa} from '../../redux/index';
// import {useDispatch,connect} from 'react-redux'
// import axios from 'axios'
// import {recivedApplication} from '../../redux/index'
// import {useSelector} from 'react-redux'
// import {Link,useParams} from 'react-router-dom'
// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// const EditStudentApplication=(props)=>{
//   const dispatch=useDispatch()
// //   useEffect(()=>{
// //     dispatch(recivedApplication()) 
// // })
// // useEffect(()=>dispatch(recivedApplication()))
// const{iddd}=useParams()
// useEffect(()=>{
//   dispatch(editHoJa(iddd)) 
// })
//   const editApplicationData=useSelector(state=>state.application.editApplicationData)
//   console.log(editApplicationData._id)
  
//   // dispatch(editHoJa(iddd))
// const he="heloo"
 
//   const[image,setImage]=useState(props.image)
//   const[purpose,setPurpose]=useState(props.purpose)
//   const[hodassistant,setHodassistant]=useState(props.hodassistant)
//   const[hodremarks,setHodremarks]=useState(props.hodremarks)
//   const[review,setReview]=useState(props.review)
//   const rejectApplication=(hodassistant)=>{
//     if(hodassistant){
//        var remarks=hodassistant
//       }else{
         
//         remarks=editApplicationData.hodassistant
//       }
      
//       var applicationstatus="reject"
//       var id=editApplicationData._id
//   dispatch(editAdmin(id,remarks,applicationstatus))
//   hodassistant=""
//   }
 

//   const forwardApplication=(hodassistant)=>{
//     if(hodassistant){
//        var remarks=hodassistant
//       }else{
         
//         remarks=editApplicationData.hodassistant
//       }
      
//       var applicationstatus="forward"
//       var id=editApplicationData._id
//   dispatch(editAdmin(id,remarks,applicationstatus))
//   hodassistant=""
//   }

//   const revisedApplication=(hodassistant)=>{
//     if(hodassistant){
//        var remarks=hodassistant
//       }else{
         
//         remarks=editApplicationData.hodassistant
//       }
      
//       var applicationstatus="pending"
//       var id=editApplicationData._id
//   dispatch(editAdmin(id,remarks,applicationstatus))
//   hodassistant=""
//   }
//   ////

  



// console.log(editApplicationData.image)
// if(editApplicationData.image){
//   var str = editApplicationData.image;
//   str = str.replace("public", "");
 
  
//     var profilePic="http://localhost:5000/"+str
// }else{
//   profilePic=''
// }
//     return(
//         <><br/><br/><br/>
          

// <form enctype="multipart/form-data">

//        <Container>   
//          <img src={profilePic} width="500px"alt="Raja"/>
//       <Row>
//     <Col xs={12}>
 
    
    
     
//     </Col>
    
//     </Row>
//         <br/><br/>
      
        
       
        
//         <Row>
//         <Col md={2}></Col>
//         <Col md={8} sm={12}><TextField value={props.purpose} disabled onChange={(e)=>setPurpose(e.target.value)}  style={{width:'100%'}} /></Col>
//         <Col md={2}></Col>
//         </Row><br/><br/>

//         <Row>
//         <Col md={2} ></Col>
//         <Col md={8}sm={12}>
//         <Form.Group >
//     <Form.Label style={{float:'left'}}><b>HOD Assistant Remarks</b></Form.Label>
//     <Form.Control as="textarea" disabled rows={5} defaultValue={props.forStudent}  onChange={(e)=>setHodassistant(e.target.value)} />
//   </Form.Group>
//         </Col>
//         <Col md={2}></Col>
//         </Row><br/><br/>
     
//        <br/>
// {/* 
//        <Button style={{ background: 'Navy',padding:'15px',color:'white'}} onClick={()=>revisedApplication(hodassistant)} ><Link to="/acceptbyhod" style={{textDecoration:'none',color:'white'}}>Revised</Link> </Button>
//         &nbsp; &nbsp; &nbsp; &nbsp; <Button style={{ background: 'Navy',padding:'15px',color:'white'}} onClick={()=>rejectApplication(hodassistant)}><Link to="/acceptbyhod" style={{textDecoration:'none',color:'white'}}>Reject</Link></Button>
//         &nbsp; &nbsp; &nbsp; &nbsp; <Button style={{ background: 'Navy',padding:'15px',color:'white'}} onClick={()=>forwardApplication(hodassistant)}><Link to="/acceptbyhod" style={{textDecoration:'none',color:'white'}}>Forward</Link></Button>
//         <br/><br/> */}
       
//       </Container>
//       </form>
//         </>
//     )
// }

// const mapStatetoProps=(state)=>{
//     return{
// purpose:state.application.editApplicationData.purpose,
// hodassistant:state.application.editApplicationData.hodassistant,
// hodremarks:state.application.editApplicationData.hodremarks,
// forStudent:state.application.editApplicationData.forStudent

//     }

// }
// const mapDispatchtoProps=(dispatch)=>{return{

// }

// }

// export default connect(mapStatetoProps,mapDispatchtoProps)(EditStudentApplication);