import { colors, Container } from '@material-ui/core'
import {Link} from 'react-router-dom'
import React from 'react'

const RootUserHome=()=>{
    return(
        <>
        <Container><br/><br/><br/>
        {/* <h5 style={{float:'right'}}> <Link to="/createaccount" style={{color:'Navy'}}>Add New Account</Link></h5><br/><br/>
        <h5 style={{float:'right'}}> <Link to="/createdepartment" style={{color:'Navy'}}>Add New Department</Link></h5> */}
        </Container>
<h2 style={{marginTop:'12%',color:'Navy'}}>Root User Home</h2>

        </>
    )
}

export default RootUserHome