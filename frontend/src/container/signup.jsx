import React,{useState} from 'react'
import {TextField,form, Container,Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import { Link } from "react-router-dom";
import { Signup } from '../redux/index';
import {useDispatch,useSelector} from 'react-redux'

import {Alert} from 'react-bootstrap'
const useStyles = makeStyles({
    root: {
      background: 'Navy',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });
const SignupForm=()=>{
  const message=useSelector(state=>state.user.message)
  const dispatch=useDispatch()
      const classes = useStyles();
const [raja,setRaja]=useState("")
      const[name,setName]=useState('')
      const[roll,setRoll]=useState('')
      const[email,setEmail]=useState('')
      const[password,setPassword]=useState('')
      const[confirm,setConfirm]=useState('')
      const[emailValidate,setemailValidate]=useState('')
      const[role,setRole]=useState('student')
      const clickKro=(name,roll,email,password,confirm)=>{
        if(name==""||roll==""||email==""||password==""){
          setRaja("Please Fill All the Data")
        }else{
         // var emailValidate=new RegExp(/[a-z0-9._%+-]+@u+\.[a-z]{2,15}/g).test(email)
    //     var emailValidate=new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)
         var emailValidate=new RegExp(/[a-z0-9._%+-]+@gmail.com/g).test(email)
       //   console.log("Terra" , ter)
          if(emailValidate){
          setRaja('')
          setemailValidate(' ')
         var status="pending"
           dispatch(Signup(name,roll,email,password,confirm,role))
        }
        else{
          setemailValidate("Email is not correct")
        }
      }
      }
     if(emailValidate){
       var emailValidateIssue=<p style={{color:'orange'}}>{emailValidate}</p>
     }else{
      emailValidateIssue=''
     }
      // console.log(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test('sddsfdgsg'))
      // console.log(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test('arulgetsolute@gmail.com'))
      // console.log(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test('arulgetsolute@gmail.'))
      
      if(message=="User is Register Successfully"){
        var btn=<><Alert  variant="success" style={{color:'black',fontSize:20}}>{message}</Alert></>
        }
        else if(message=="Email is already Register"){
         btn=<><Alert  variant="danger" style={{color:'black',fontSize:20}}>Email or User ID is already Registered</Alert></>
        //btn=<><Alert  variant="danger" style={{color:'black',fontSize:20}}>Email is already Registered</Alert></>
  
      }else if(message=="Pasword is not Matched"){
          btn=<><Alert  variant="danger" style={{color:'black',fontSize:20}}>{message}</Alert></>
        }
        else{
          btn=""
        }
        if(raja!=""){
     var bc=<Alert  variant="danger" style={{color:'black',fontSize:20}}>{raja}</Alert>
        }
      
    return(
        <>

    <div>
   
     
        <div className={classes.root}>
        <h2  style={{textAlign:'center',color:'white'} } >Create Account </h2><br/><br/><br/><br/>
        </div>
        
    </div><br/>
    <Container>
    <div className="row">
    <div className="col-sm-2"></div>
    <div className="col-sm-8">{bc}</div>
    <div className="col-sm-2"></div>
    </div>
    
    <div className="row">
    <div className="col-sm-2"></div>
    <div className="col-sm-8">{btn}</div>
    <div className="col-sm-2"></div>
    </div>
   
    
    <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
        <form  noValidate autoComplete="off">
  <TextField id="standard-basic" label=" Full Name" onChange={(e)=>setName(e.target.value)} style={{width:'100%'}} /><br/><br/><br/>
  <TextField id="standard-basic" label="User ID" onChange={(e)=>setRoll(e.target.value)} style={{width:'100%'}} /><br/><br/><br/>
  
  <TextField id="standard-basic" type="email" label="Email"  onChange={(e)=>setEmail(e.target.value)} style={{width:'100%'}} /><br/>
  <p style={{float:'left'}}>{emailValidateIssue}</p>
  <br/><br/>
  <TextField id="standard-basic" type="password" label="Password" onChange={(e)=>setPassword(e.target.value)} style={{width:'100%'}} /><br/><br/><br/>
  <TextField id="standard-basic" type="password" label="Confirm Password" onChange={(e)=>setConfirm(e.target.value)} style={{width:'100%'}} /><br/><br/><br/>
  {/* {addNew}<br/><br/> */}
  <Button variant="contained" className={classes.root} onClick={()=>clickKro(name,roll,email,password,confirm)}> Create Account </Button><br/>
  <p style={{color:'Navy'}} >If you have already account then <Link to="/" style={{color:'Navy',fontSize:'18px'}}><b>Login</b></Link> </p>
</form>
        </div>
        <div className="col-sm-3"></div>
    </div>

</Container>
        </>
    )

}

export default SignupForm