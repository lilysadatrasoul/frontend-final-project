import React from 'react'
import ieltslogo from "../assets/images/ielts logo.png";

export default function Sidebar() {
  return (
    <div className='sidebar'>
        
        <div className="container  d-flex flex-column ">
          <div className='p2-side1 mb-5'>
          <img src={ieltslogo} className="image py-5 px-5 mx-5" alt="img" />
          </div>
          <div className=' mb-5'>
          <div className="container text-light p2-side2  ">
            <h3 className="py-3">این همان عنوان مطلب است</h3>
            <p className=" fs-6">
              این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری
              ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد
              دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ
              کاربرد دیگری ندارد.
            </p>
            <button className="btn bg-light border border-1 rounded-pill mb-5 ">
            <a href='' className='text-dark'>بیشتر بدانید</a>
            </button>
          </div>
          <div className="p2-side3 mt-5 px-3 py-2 text-light">
          <h3 className=" py-2">یک فهرست</h3>
          <div className=''>
            <p >
              <p>این یک متن آزمایشی برای تست جانمایی متون است</p>
              <hr />
              <p>هیچ کاربرد دیگری</p>
              <hr />
              <p>ندارد</p>
              <hr />
              <p>این یک متن آزمایشی برای تست جانمایی متون است</p>
              <hr />
              <p>هیچ کاربرد دیگری</p>
              <hr />
              <p>ندارد</p>
              <hr />
              <p>این یک متن آزمایشی برای تست جانمایی متون است</p>
              <hr />
              <p>هیچ کاربرد دیگری</p>
              <hr />
            </p>
          </div>
        </div>
        
          
          </div>
        </div>
        

    </div>
  )
}
