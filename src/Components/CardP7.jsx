import React from 'react'

export default function CardP7({image,title,oldPrice,teacher,time,newPrice,teachImg}) {
  return (
    <div className=" col-12 col-lg-3 d-flex justify-content-center ms-1 ">
      <div className="card  ">
        <img src={image} className="card" alt="#" />
        <p className="d-flex justify-content-center fs-4">
          {title}
        </p>

        <div className='px-3'>
          <img src={teachImg} className="circleimage rounded-circle  " alt="#" />
          <span>{teacher}</span>
        </div>
        <div >
          <div className="d-flex flex-column px-3">
            <p>
            {oldPrice}
            </p>
            <p>
            {newPrice}
            </p>
            
          </div>
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
        </div>
      </div>
    </div>
  )
}
