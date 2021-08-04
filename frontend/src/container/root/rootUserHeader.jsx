import { Container } from '@material-ui/core';
import React from 'react';
import {Link, Route} from 'react-router-dom'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'

import {logoutAccount} from '../../redux/index'
import { useSelector,useDispatch } from 'react-redux';
const RootUserHeader=()=>{
  const name=useSelector((state)=>state.user.token.name)
    const dispatch=useDispatch()
    const Logout=()=>{
      dispatch(logoutAccount())
      window.location.replace("/");
    }
    const userProfile=()=>{
    
  
    }
    return(
        <>
        
<Navbar collapseOnSelect expand="lg" style={{ background: 'Navy'}} variant="dark">
  <Navbar.Brand  > <Link to="/" style={{textDecoration:'none',color:'white'}}>Root User</Link> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" style={{color:'white'}}>
      <Nav.Link style={{color:'white'}}> <Link to="/" style={{textDecoration:'none',color:'white'}}>Home</Link></Nav.Link>
    
      <Nav.Link style={{color:'white'}}> <Link to="/notification" style={{textDecoration:'none',color:'white'}}>Notification Mangement </Link></Nav.Link>   
      <Nav.Link style={{color:'white'}}> <Link to="/allnotification" style={{textDecoration:'none',color:'white'}}>All Notifications </Link></Nav.Link>     
     

    </Nav>
    <Nav>
    <Nav.Link  to="/userProfile" style={{color:'white'}} onClick={()=>userProfile()}><Link to="/userProfile"  style={{textDecoration:'none',color:'white'}}>{name}</Link></Nav.Link>
    <Nav.Link  to="/"  style={{color:'white'}} onClick={()=>Logout()}><Link to="/" style={{textDecoration:'none',color:'white'}}>Logout</Link></Nav.Link>
      
    
    </Nav>
  </Navbar.Collapse>
</Navbar>

        </>
    )
}

export default RootUserHeader