import React from 'react'

export default function CardP7({image,title,describe,date}) {
  return (
    <div className="CardP7 col-12 col-lg-3 d-flex justify-content-center  ">
      <div className="card w-75 ">
        <img src={image} className="card" alt="#" />
        <p className="d-flex justify-content-center fs-4">
          {title}
        </p>
        <p className="d-flex justify-content-center fs-6 ps-2 ">
          {describe}
        </p>        
        
        <div className="d-flex">
          
          <i class="fa fa-clock-o p-2"></i>
          <div className="px-2" >
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
