import { Container } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {AllNotification,ShowNotification} from '../../redux/index'
import {useSelector,useDispatch} from 'react-redux'
import ReactPaginate from 'react-paginate';
const AllNotificationFrontend=()=>{
    const dispatch=useDispatch()
    const rootNotification=useSelector(state=>state.application.rootNotification)
   
        useEffect(()=>{
            dispatch(AllNotification()) 
        })
        const clickHoJa=(value)=>{
            dispatch(ShowNotification(value)) 
        }
        var i=0
      
        const[pageNumber,setPageNumber]=useState('0')
    const userPerPage=10
    const pageVissted=pageNumber*userPerPage
    if(rootNotification){
    var pageCount=Math.ceil(rootNotification.length/userPerPage)
    }else{
        pageCount=0
    }
    const changePage=({selected})=>{
setPageNumber(selected)
    }
         if(rootNotification){
            var tablek=rootNotification.slice(pageVissted,pageVissted+userPerPage)
           .map((val)=>{
               
i++
                return<> 
                <h5 style={{float:'left',marginLeft:'4%'}} onClick={clickHoJa(val._id)}> <Link to={`/openNotification/${val._id}`}>{val.purpose}</Link></h5><br/><br/>
               
                </>
              
                 
             
            })
            }if(i==0){
                tablek=<td colSpan="5" style={{ background: 'Navy',width:'100%',color:'white',padding:'9%',textAlign:'center'}}>No Notification  Found</td>
            }
            if(rootNotification!=undefined){
                if(rootNotification.length>10){
                  var king=<>
              <ReactPaginate 
                    previousLabel={"Previous"} 
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    />
                  </>
                }else{
                  king=""
                }
              }
    return(
        <>
<br/>
<h1 style={{color:'Navy'}}>All Notifications </h1><br/><br/>
<Container>
{tablek}
<br/><br/>
{king}
  

</Container>
        </>
    )
}

export default AllNotificationFrontend