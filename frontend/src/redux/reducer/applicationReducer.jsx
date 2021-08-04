import React from 'react';
// import { UPDATE_DEPARTMENT_NAME,ADD_DEPARTMENT, ALL_DEPARTMENT, DELETE_DEPARTMENT, EDIT_DEPARTMENT_NAME } from '../action/applicationType';
import {ADD_NOTIFICATION,SHOW_NOTIFICATION,ALL_DONN,ALL_NOTIFICATION} from '../action/applicationType'
const initialValue={
    name:'',
    Password:'',
    totalApplication:[],
    message:'',
    reciveApplication:[],
    editApplicationData:[],
    message3:'',
    allDEPARTMENTData:'',
    rootNotification:[],
    NotificationId:'',
    messageNotification:'',
    searchData:null,
    imageData:'',
    deleteDepartmentMsg:'',
    editDepartmentMsg:'',
    message0:''

}
// deleteUserDataz
const applicationReducer=(state=initialValue,action)=>{

    switch(action.type){
       
        case ALL_NOTIFICATION:return{
            ...state,
            rootNotification:action.rootNotification,
            messageNotification:''
        } 
        case SHOW_NOTIFICATION:return{
            ...state,
            NotificationId:action.NotificationId,
            messageNotification:''
        }
        case ADD_NOTIFICATION:return{
            ...state,
            messageNotification:action.messageNotification

        } 
        
        
        
        default:return state
    }
}

export default applicationReducer