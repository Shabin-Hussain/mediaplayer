import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoApi } from '../services/allApi';


function Videocard({displayVideo, setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(displayVideo);

  const handleDelete = async(id)=>{
    const result = await deleteVideoApi(id)
    console.log(result);
    setDeleteVideoStatus(result.data)
    
  }
  

  return (
    <>
     <Card style={{ width: '100%' }} className='mt-4'>
      <Card.Img onClick={handleShow} variant="top" /* src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkB2U_1-LL8BraSx9uXbQ_8_tyWuq5YiqzP_6oUECXscI-mCk3jegHI4lU&s=10" */ src={displayVideo?.image} width={'100%'} height={'300px'}/>
      <Card.Body className='d-flex'>
        
        <Card.Text>
          {displayVideo?.caption}
        </Card.Text>
        <button className='btn btn-danger ms-auto' onClick={()=>handleDelete(displayVideo?.id)}><FontAwesomeIcon icon={faTrash} /></button>
      </Card.Body>
    </Card>


     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="463" src={`${displayVideo?.url}?autoplay=1`} title="Is The NEW Audi RS5 Faster Than A BMW M3?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default Videocard