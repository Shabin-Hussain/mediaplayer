import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Add() {
  //create a state to hold data from input
  const[video,setVideo] = useState({
    caption:"",
    image:"",
    url:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(video);
  


  return (
    <div className='d-flex align-items-center'>
      <h5 id='h'>Upload new video</h5>
      <button className='btn mb-2' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} size='xl' /></button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className='border p-3 rounded border-secondary'>
            <input type="text" placeholder='Video Caption' className='form-control' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            <input type="text" placeholder='Video Image' className='form-control mt-3' onChange={(e)=>setVideo({...video,image:e.target.value})}/>
            <input type="text" placeholder='Video Url' className='form-control mt-3' />

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Add