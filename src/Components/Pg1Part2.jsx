import React from 'react'
import ieltslogo from "../assets/images/ielts logo.png"


export default function Pg1Part2() {
  return (
    <div>
        <div className="Container-fluid">
      <div className="d-flex flex-wrap">
        <div className="d-flex container  p2-left col-12 col-lg-6 py-5 px-5">
          <img src={ieltslogo} className="ieltslogo ps-5 pt-5  " alt="this is a logo" />
        </div>
        <div className="d-flex p2-right col-12 col-lg-6">
          <div className=" flex-column  container my-5 mx-5 pt-5" dir="rtl">
            <h2 className="text-light">این همان مطلب است</h2>
            <p className="text-light fs-5">
              این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری
              ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد
              دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ
              کاربرد دیگری ندارد.
            </p>
            <button className="btn bg-none border border-1 rounded-pill ">
            <a href='' className='text-light'>بیشتر بدانید</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
