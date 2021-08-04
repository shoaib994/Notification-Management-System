import { Container } from '@material-ui/core';
import React from 'react';
import {Link, Route} from 'react-router-dom'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
// import CourseIssue from '../admin/courseIssue';
// import Feeeissue from '../admin/feeIssue';
// import SemesterFreez from '../admin/semesterFreez';
// import StudentCard from '../admin/studentCard'
// import OtherIssue from '../admin/otherIssue'
import RevisedApplication from '../admin/RevisedAppliation'
import ForwardApplication from '../admin/forwardApplication';
import AllApplication from '../admin/allApplication';
import ReciveApplication from '../admin/recivedApplication'
import {logoutAccount} from '../../redux/index'
import { useDispatch } from 'react-redux';
import AllNotification from './allNotification'
const RootNavbar=()=>{
  const dispatch=useDispatch()
  const Logout=()=>{
    dispatch(logoutAccount())

  }
    return(
        <>
        
<Navbar collapseOnSelect expand="lg" style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}} variant="dark">
  <Navbar.Brand  > <Link to="/" style={{textDecoration:'none',color:'white'}}>Application Mangement</Link> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" style={{color:'white'}}>
      <Nav.Link style={{color:'white'}}> <Link to="/" style={{textDecoration:'none',color:'white'}}>Home</Link></Nav.Link>
      <Nav.Link style={{color:'white'}}> <Link to="/revised" style={{textDecoration:'none',color:'white'}}>Revised Applications</Link></Nav.Link>
      <Nav.Link  style={{color:'white'}}> <Link to="/forward" style={{textDecoration:'none',color:'white'}}>Forward Applications</Link></Nav.Link>

      <Nav.Link  style={{color:'white'}}> <Link to="/all" style={{textDecoration:'none',color:'white'}}>All Applications</Link></Nav.Link>
      <Nav.Link  style={{color:'white'}}> <Link to="/allNotification" style={{textDecoration:'none',color:'white'}}>All Notifications</Link></Nav.Link>
      {/* <NavDropdown  title ="Student Application" id="collasible-nav-dropdown" style={{color:'white'}}>
        <NavDropdown.Item   style={{color:'black'}}><Link style={{textDecoration:'none',color:'black'}} to="/course">Course Issue</Link></NavDropdown.Item>
        <NavDropdown.Item   style={{color:'black'}}><Link style={{textDecoration:'none',color:'black'}} to="/studentcard">Student Card</Link></NavDropdown.Item>
        <NavDropdown.Item  style={{color:'black'}}><Link style={{textDecoration:'none',color:'black'}} to="/fee">Fees issue</Link></NavDropdown.Item>
        <NavDropdown.Item  style={{color:'black'}}><Link style={{textDecoration:'none',color:'black'}} to="/semesterfreez">Semester Freez</Link></NavDropdown.Item>
        <NavDropdown.Item   style={{color:'black'}}><Link style={{textDecoration:'none',color:'black'}} to="/recive">Recived Application</Link></NavDropdown.Item>
        <NavDropdown.Item   style={{color:'black'}}><Link style={{textDecoration:'none',color:'black'}} to="/gernal">Other Application</Link></NavDropdown.Item>
        <NavDropdown.Item   style={{color:'black'}}><Link style={{textDecoration:'none',color:'black'}} to="/all">All Application</Link></NavDropdown.Item>
        <NavDropdown.Item   style={{color:'black'}}><Link style={{textDecoration:'none',color:'black'}} to="/allNotification">All Notification</Link></NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link to="/" href="/" style={{color:'white'}} onClick={()=>Logout()}>Logout</Nav.Link>
    
       
    </Nav>
  </Navbar.Collapse>
</Navbar>
{/* <Route exact path="/course" component={CourseIssue}/>
<Route exact path="/studentcard" component={StudentCard}/>
<Route exact path="/fee" component={Feeeissue}/>
<Route exact path="/se" component={CourseIssue}/>
<Route exact path="/semesterfreez" component={SemesterFreez}/>
<Route exact path="/gernal" component={OtherIssue}/>
<Route exact path="/revised" component={RevisedApplication}/>
<Route exact path="/submit" component={RevisedApplication}/>
<Route exact path="/forward" component={ForwardApplication}/>
<Route exact path="/all" component={AllApplication}/>  
<Route exact path="/recive" component={ReciveApplication}/> */}

        </>
    )
}

export default RootNavbar