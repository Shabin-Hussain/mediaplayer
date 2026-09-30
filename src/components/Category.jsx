import { faPenNib, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { addCategoryApi, AllCategoryApi, deleteCategoryApi } from '../services/allApi'







function Category() {
   const [show, setShow] = useState(false);
   const[CategoryName, setCategoryName] = useState("")
   const[allCategory, setAllCategory] = useState([]) 
  const[addStatus, setAddStatus] = useState(false)


  const handleClose = () =>{ setShow(false);
     setCategoryName("")
  }
  const handleShow = () => setShow(true);

   const addCategory = async()=>{
   if(CategoryName){
    const reqBody = {
      CategoryName,
      allVideo:[]
    }

    const result = await addCategoryApi(reqBody)
    if(result.status>=200 && result.status<300){
      handleClose()
      setAddStatus(true)
      toast.success('category added successfully')
    }
    else{
      console.log(result);

    }
   }else{
    toast.info('Please add the category name')
   }
  }

  const getAllCategory = async()=>{
    const result = await AllCategoryApi()
    console.log(result);
    if(result.status>=200 && result.status<300){
      setAllCategory(result.data)

    }
    

  }
  console.log(allCategory);

  const delCategory = async(id)=>{
    const result = await deleteCategoryApi(id)
    console.log(result);
    getAllCategory()
    
  }

   useEffect(()=>{
    setAddStatus(false)
    getAllCategory()
    
   
  },[addStatus])


  return (
    <>
    <div className='w-100 mt-md-1 mt-5 p-4'>
        <button onClick={handleShow} className='btn btn-warning w-100'>Add New Category<FontAwesomeIcon icon={faPlus} /></button>
    </div>

   {allCategory?.length>0?
   allCategory?.map((item)=>(<div className='mt-md-5 mt-2'>
        <div className='border border-secondary mt-3 rounded p-3 ms-4 ms-md-0'>
            <div className='d-flex'>
               <h6>{item.CategoryName}</h6>
               <button className='btn btn-danger ms-auto' onClick={()=>delCategory(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
            <Row>
          {item?.allVideo?.length>0?
          item?.allVideo?.map((videoItem)=>(
          <Col sm={12} >
          <Videocard displayVideo = {videoItem} isPresent={true}/>
          </Col>))
          :
          null
          }
        </Row>
            {/* <Videocard/> */}
        </div>
    </div>
    ))
    :null} 

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faPenNib} />Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border rounded p-3 border-secondary'>
            <input type="text" placeholder='Category Name' className='form-control' onChange={(e)=>setCategoryName(e.target.value)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Category