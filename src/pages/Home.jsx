import React from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'







function Home() {
  return (
   <>
      <div className='d-flex mt-5 p-5'>
       <Add/>
  
       <h5 className='ms-auto'><Link style={{textDecoration:'none',color:'white'}} to={'/watch-history'}><span id='h'>Watch History</span><FontAwesomeIcon icon={faClockRotateLeft} /></Link></h5>
      </div>
  
      <div className="row w-100 p-4">
        <div className="col-md-9">
          <h4>All Videos</h4>
          <View/>
        </div>
        <div className="col-md-3">
          <Category/>
        </div>
      </div>
   </>
  )
}

export default Home