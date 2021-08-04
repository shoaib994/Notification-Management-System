import React,{useEffect} from 'react';
import LoginForm from './container/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import SignupForm from './container/signup';


    // import AllApplication from './container/allApplication';
import {useSelector,useDispatch} from 'react-redux'
import {currentUser} from './redux/index'
import jwt from 'jsonwebtoken'
import UserContainer from './container/student/userContainer'
import AllNotification from './container/root/allNotification'

//// Root User ///

import RootUserHome from './container/root/rootUserHome'
import NotificationMangementSystem from './container/root/notificationMangementSystem'
import RootUserHeader from './container/root/rootUserHeader';

import StudentHeader from './container/student/studentHeader'
import OpenNotification from './container/root/openNotification'

import EditStudent from './container/root/editStudent' 


/////////// Teacher Modeule






import AdminUserProfile from './container/admin/userProfile'


import AllNotificationRoot from './container/root/allNotificationRoot'

import EditStudentApplication from './container/student/editStudentApplication'
const MainComponent=()=>{
    const dispatch=useDispatch()
   // 

if(localStorage.jwt){
    var userrole=jwt.decode(localStorage.jwt)
    var role=userrole.role
dispatch(currentUser(jwt.decode(localStorage.jwt),role))




}
const isLogged=useSelector(state=>state.user.isLogged)

if(isLogged){ 
   
  var boss=""
    if(userrole.role=='student'){
        
        
  boss=<><StudentHeader/>
<Route path="/userProfile" component={AdminUserProfile}/>
<Route path="/editStudent/:iddd" component={EditStudentApplication}/>

  <Route path="/openNotification/:iddd" component={OpenNotification}/> 
   <Route exact path="/" component={UserContainer}/></>
    
}
    else if(userrole.role=='root'){
        boss=<><RootUserHeader/><Route path="/openNotification/:iddd" component={OpenNotification}/>
        <Route exact path="/" component={RootUserHome}/>
       
         <Route exact path="/notification" component={NotificationMangementSystem}/>
       
        <Route exact path="/allnotification" component={AllNotificationRoot}/>
      
        <Route path="/userProfile" component={AdminUserProfile}/>
       
        <Route exact path="/editStudent/:iddd" component={EditStudent}/>

        
        
        </>
           }
        
        }
           else{
            boss=<>
           
            <Route exact path="/signup" component={SignupForm}/><Route exact path="/" component={LoginForm}/>  <Route exact path="/allnotification" component={AllNotification}/>
                
        
             </>
        }
   
        
    return(

        <>
        
    <BrowserRouter> 
 
    {boss}

</BrowserRouter>   

        </>
    )
}

export default MainComponent