import React from 'react';
import {VERIFY_USER,EDIT_USER,LOGIN_USER, SIGNUP_USER,SET_CURRENT_USER,ALL_USER,SEARCH_USER, LOGOUT_USER,UPDATE_PASSWORD,FORGOT_PASSWORD, DELETE_USER} from '../action/productType'
const initialValue={
    name:'',
    Password:'',
    message:'',
    isLogged:false,
    token:'',
    data:[],
    role:'',
    userData:[],
    message3:'',
    token:[],
    tokenmsg:'',
    searchUser:null,
    deleteUserMsg:'',
    editStudentStore:'',
    message00:''
}

const userReducer=(state=initialValue,action)=>{

    switch(action.type){

        case SIGNUP_USER:return{
            ...state,
            message:action.message,
            tokenmsg:''
        }
        case LOGIN_USER:return{
            ...state,
            message3:action.message3,
            isLogged:action.isLogged,
            tokenmsg:'',
            message00:action.message00
        } 
        case SET_CURRENT_USER:return{
            ...state,
            token:action.token,
            // data:data,'
            role:action.role,
            isLogged:action.isLogged
        } 
        
        case LOGOUT_USER:return{
            ...state,
            isLogged:false
        }
      
       
        
        

        
        default:return state
    }
}

export default userReducer