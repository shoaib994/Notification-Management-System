import React from 'react';
import {SIGNUP_USER,LOGIN_USER,SET_CURRENT_USER,LOGOUT_USER} from './productType'
import axios from 'axios'
import jwt from 'jsonwebtoken'


export const Signup=(name,id,email,password,confirm,role,status)=>{
  return function(dispatch){
      var option = {
          url: "http://localhost:5000/signup",
          method: "POST",
          timeout: 0,
          data:{name:name,id:id,email:email,password:password,confirm:confirm,role:role,status:status},
          headers: {
            "Content-Type": "application/json"
          },
      }
          axios(option).then( data=>{
             const message=data.data.message
           
             console.log(data)
             console.log("message",message,"action")
              dispatch({
                type:SIGNUP_USER,
                message:message
            })
           } ).catch(err=>console.log(err))
            
        }
}

export const loginUser=(user,password)=>{
  return function(dispatch){
  var option = {
      url: "http://localhost:5000/login",
      method: "POST",
      timeout: 0,
      data:{name:user,password:password},
      headers: {
        "Content-Type": "application/json"
      },
  }
      axios(option).then( data=>{
         const message=data.data.message
       
         if(message=='User is Signin Successfully'){
             var token=data.data.token
             var role=data.data.data[0].role
             
             localStorage.setItem('jwt',token)
          dispatch(currentUser(jwt.decode(token),role))
         }else{
        
          dispatch({
            type:LOGIN_USER,
            message3:message,
              isLogged:false
          })
         }
       } ).catch(err=>console.log(err))
        
    }
    };
 
    export const currentUser=(token,role)=>{
      return{
          type:SET_CURRENT_USER,
          token:token,
          role:role,
          isLogged:true
      }
        };

  
  export const logoutAccount=()=>{
       
    localStorage.removeItem('jwt')
  
    return({
        type:LOGOUT_USER,
       
        isLoggedin:false
    })
  
  
  }
 


