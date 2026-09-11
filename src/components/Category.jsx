import { faPenNib, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Videocard from './Videocard'
import { Button, Modal } from 'react-bootstrap'




function Category() {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='w-100 mt-md-1 mt-5 p-4'>
        <button onClick={handleShow} className='btn btn-warning w-100'>Add New Category<FontAwesomeIcon icon={faPlus} /></button>
    </div>

    <div className='mt-md-5 mt-2'>
        <div className='border border-secondary mt-3 rounded p-3 ms-4 ms-md-0'>
            <div className='d-flex'>
               <h6>Movie Title</h6>
               <button className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
            <Videocard/>
        </div>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faPenNib} />Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border rounded p-3 border-secondary'>
            <input type="text" placeholder='Category Name' className='form-control'/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Category