import React, { useState } from 'react'
import {TextField,form, Container,Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {loginUser} from  '../redux/index'
import {Alert} from 'react-bootstrap'
import style1 from './style1.module.css'

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
const LoginForm=()=>{
  const message=useSelector(state=>state.user.message3)
  const message8=useSelector(state=>state.user.message8)

  const tokenmsg=useSelector(state=>state.user.tokenmsg)
  const message00=useSelector(state=>state.user.message00)

  
  if(tokenmsg=="Please Check Your Email Inbox"){
    var wt=<><Alert  variant="success">{tokenmsg}</Alert></>
  }else if(tokenmsg=="Your Email is not registered"){
    wt=<><Alert  variant="danger">{tokenmsg}</Alert></>
  }else if(tokenmsg=="Password has been Updated Successfully"){
    wt=<><Alert  variant="success">{tokenmsg}</Alert></>
  }
  else if(message=="Your Email hase been Verified"){
    wt=<><Alert  variant="danger" style={{color:'black',fontSize:20}}>Your Email hase been Verified</Alert></>

    
  }
  else{
    wt=""
  }

  console.log("message",message)
  const dispatch=useDispatch()
    const[user,setUser]=useState(' ')
    const[password,setPassword]=useState(' ')
      const classes = useStyles();

     
      const loginho=(user,password)=>{
        dispatch(loginUser(user,password))
      }
      if(message){
      var btn=<><Alert  variant="danger">{message}</Alert></>
      }else{
        btn=""
      }
      if(message8=="Your Email hase been Verified"){
   var pen=<><Alert  variant="danger">{message}</Alert></>
      }else{
        pen=""
      }
     
    return(
        <>


    <div>
        <div className={classes.root}>
        <h2  style={{textAlign:'center',color:'white'} } >Login Account </h2><br/><br/>
        </div>
        
    </div><br/><br/>
    <Container>
    {btn}
    {wt}
    <br/><br/><br/><br/>
    <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
        <form  noValidate autoComplete="off">
  <TextField id="standard-basic" label="User Email" onChange={(e)=>setUser(e.target.value)} style={{width:'100%'}} /><br/><br/><br/>
  <TextField id="standard-basic" type="password" label="User Password" onChange={(e)=>setPassword(e.target.value)} style={{width:'100%'}} /><br/><br/><br/>
  
  <Button variant="contained" className={classes.root} onClick={()=>loginho(user,password)}> Login </Button><br/><br/>
  <p style={{color:'Navy'}} >Don't have account? <Link to="/signup" style={{color:'Navy',fontSize:'18px'}}><b>Signup</b></Link> </p>
 

</form>
        </div>
        <div className="col-sm-3"></div>
    </div>
<br/><br/><br/>
    <div className={style1.hello}>


<h1 className={style1.heading}>Developed_By_Shoaib_Ahmed..!!</h1>
<br/>
</div>
</Container>
        </>
    )

}

export default LoginForm