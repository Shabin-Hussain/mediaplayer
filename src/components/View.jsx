import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getVideoApi } from '../services/allApi'



function View({addStatus}) {
   const[videoDetails,setVideoDetails] = useState([])
   const[deleteVideoStatus,setDeleteVideoStatus] = useState([])


   //side effect
   const getvideo = async ()=>{
   const result = await getVideoApi()
   console.log(result.data);
   setVideoDetails(result.data)
   
   }


   useEffect(()=>{
      getvideo()
   },[addStatus,deleteVideoStatus])

   console.log(videoDetails);
   

   


  return (
    <Row className='w-100 ms-4 ms-md-0'>
      
         {videoDetails?.length>0?
         videoDetails.map((item)=>(<Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
            <Videocard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
         </Col>))
         :
   
         <p className='text-warning fs-5 mt-4'>No video yet uploaded.....</p>}
      
    </Row>
  )
}

export default View