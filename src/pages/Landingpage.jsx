
import React from 'react'
import Card from 'react-bootstrap/Card';





function Landingpage() {
  return (
    <>
      <div className="row mt-5 w-100 justify-content-center align-items-center"> {/* align-vertical */}
        <div className="col-md-1"></div>
        <div className="col-md-5 p-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, facere aperiam accusantium corrupti esse nihil soluta temporibus dolores quas numquam ea deleniti mollitia ab! Cum deleniti sunt architecto delectus beatae.Incidunt fugiat consectetur cum quae itaque exercitationem nobis consequatur praesentium eveniet doloribus optio, ab, et eum corrupti aspernatur totam nihil doloremque deserunt reiciendis quam facere quaerat. Debitis repudiandae nulla voluptate.</p>

          <button className='btn btn-warning mt-5'>Get Started</button>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 d-flex justify-content-center  align-items-center p-md-5">
          <img src="./public/Music Beat GIF.gif" alt="image of beat" className='w-75' />
        </div>
      </div>


      <div className="row w-100 mt-5">
        <h3 className='mt-5 text-center mb-5'>Features</h3>
        <div className="col-md-1 me-md-5"></div>
        <div className="col-md-3 px-5 px-md-4 mt-3">
          <Card style={{ width: '100%' }} className='p-3'>
            <Card.Img variant="top" src="./public/music1.gif" className='w-100' style={{height:'340px'}}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 px-5 px-md-4 mt-3">
          <Card style={{ width: '100%' }} className='p-3'>
            <Card.Img variant="top" src="./public/music2.gif" className='w-100' style={{height:'340px'}}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 px-5 px-md-4 mt-3">
          <Card style={{ width: '100%' }} className='p-3'>
            <Card.Img variant="top" src="./public/music3.gif" className='w-100' style={{height:'340px'}}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-1"></div>
      </div>


      <div className="row w-100 mt-5 p-4 p-md-0 ms-1 ms-md-0">
         <div className="col-md-1"></div>
         <div className="col-md-9 border p-5 rounded m-md-5">
          <div className="row w-100">
             <div className="col-md-6">
              <h3 className='text-warning mt-3'>Simple fast and Powerful</h3>
              <p className='mt-4'><span className='fs-4'>Play Everything :</span> amet consectetur, adipisicing elit. Veritatis hic, natus quidem suscipit, eligendi voluptates nisi vero natus quidem suscipit, eligendi voluptates nisi vero</p>

              <p className='mt-4'><span className='fs-4'>Play Everything :</span> amet consectetur, adipisicing elit. Veritatis hic, natus quidem suscipit, eligendi voluptates nisi vero natus quidem suscipit, eligendi voluptates nisi vero</p>

              <p className='mt-4'><span className='fs-4'>Play Everything :</span> amet consectetur, adipisicing elit. Veritatis hic, natus quidem suscipit, eligendi voluptates nisi vero natus quidem suscipit, eligendi voluptates nisi vero</p>
             </div>
             <div className="col-md-6">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KCMoAU55mZk?si=7XGUwyAuZvwygIDW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             </div>
          </div>

         </div>
         <div className="col-md-2"></div>
      </div>

    </>
  )
}

export default Landingpage