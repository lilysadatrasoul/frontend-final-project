import React from 'react'

export default function CardP4({image,title,oldPrice,teacher,time,newPrice,teachImg}) {
  return (
    <div className="  col-12 col-lg-4 d-flex justify-content-center ps-2 w-25 ">
      <div className="card  ">
        <img src={image} className="card" alt="#" />
        <p className="d-flex justify-content-center fs-4">
          {title}
        </p>

        <div className='px-3 pt-5'>
          <img src={teachImg} className="circleimage rounded-circle  " alt="#" />
          <span >{teacher}</span>
        </div>
        <div className='line2'></div>
        <div >
         
        </div>
        <div className="d-flex">
          <span>{time}</span>
          <i class="fa fa-clock-o p-2"></i>
          <div className="px-2" >
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <div className="d-flex flex-column px-3">
            <div className='me-5 position-relative'>
            {oldPrice}
            <div className='line3 m-2 text-danger'> </div>
            </div>
            <div className='bg-dark text-light me-5'>
            {newPrice}
            </div>           
          </div>

        </div>
      </div>
    </div>
  )
}
