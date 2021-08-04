import React from 'react';
import axios from 'axios'
import {DELETE_NOTIFICATION,ADD_NOTIFICATION,SHOW_NOTIFICATION,ALL_NOTIFICATION} from './applicationType'







export const ADDNotification=(purpose,image)=>{
  return function(dispatch){
  var form = new FormData();
   
    form.append("purpose", purpose);
   
    form.append("image", image);

var option = {
  url: "http://localhost:5000/notification",
  method: "POST",
  timeout: 0,
  processData: false,
  mimeType: "multipart/form-data",
  contentType: false,
  data: form
};
    axios(option)
    .then(data=>{
 
 
    const message= data.data.messsage
   
    
    dispatch({
      type:ADD_NOTIFICATION,
      messageNotification:message
    })
    

    })
    .catch(err=>console.log(err))
  
}

}
export const ShowNotification=(id)=>{
  
  return {
      type:SHOW_NOTIFICATION,
      NotificationId:id
  }
}
export const AllNotification=()=>{
  return function(dispatch){

  
  var option = {
      url: "http://localhost:5000/allNotification",
      method: "GET",
      timeout: 0,
    };
    axios(option).then( data=>{
     
       const boss=data.data.data
       
        dispatch({
          type:ALL_NOTIFICATION,
          rootNotification:boss
      })
     } ).catch(err=>console.log(err))
      
  }
}


export const deleteNotification=(id)=>{
  
  // alert(role)
  return (dispatch)=>{
    var settings = {
      url: "http://localhost:5000/deleteNotification",
      method: "DELETE",
      timeout: 0,
      data:{id:id},
      headers: {
        "Content-Type": "application/json"
      },
      }
          axios(settings).then( data=>{
            const result=data.data.message
      
              dispatch({
                type:DELETE_NOTIFICATION,
                deleteNotification:result
            })
           } ).catch(err=>console.log(err))
            
        }
      }

