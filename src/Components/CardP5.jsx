import React from 'react'

export default function CardP5({image,number,title,describe}) {
    return (
        <div className=" col-12  col-lg-3 d-flex justify-content-center CardP5  ">
            
            <div className=' d-flex flex-column  justify-content-center align-items-center'>
                <img className="image w-25  position-relative" src={image} alt="#" />
                <span className="number  position-absolute">{number}</span>
                <h5 className="pt-3 ">{title}</h5>
                <p className="text pe-3">
                    {describe}
                </p>
            </div>
        </div>

    )
}
