import React from 'react'
import logo1 from "../assets/images/2.jpg";
import logo2 from "../assets/images/3.jpg";
import logo3 from "../assets/images/4.png";
import ieltslogo from "../assets/images/ielts logo.png"



export default function Header2() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
     
        <div className="carousel-inner ">
          <div className="carousel-item active ">
            <img src={logo1} className=" carousel-item-img d-block w-100 " alt="..." />
           
            <div className="carousel-caption d-none d-md-block position-relative">
            <img src={ieltslogo} className="card-img sticker2-1 position-absolute " style={{ width: "150px" }} alt="..." />
              <p className='position-absolute sticker2-2'>دسته بندی: مطالب آیلتس 28/آذر/1398</p>
              <h3 className='position-absolute sticker2-3'>عنوان این مطلب در این بالا قرار میگیره و میتونه دراز باشه</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={logo2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block position-relative">
            <img src={ieltslogo} className="card-img sticker2-1 position-absolute " style={{ width: "150px" }} alt="..." />
              <p className='position-absolute sticker2-2'>دسته بندی: مطالب آیلتس 28/آذر/1398</p>
              <h3 className='position-absolute sticker2-3'>عنوان این مطلب در این بالا قرار میگیره و میتونه دراز باشه</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={logo3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block position-relative">
            <img src={ieltslogo} className="card-img sticker2-1 position-absolute " style={{ width: "150px" }} alt="..." />
              <p className='position-absolute sticker2-2'>دسته بندی: مطالب آیلتس 28/آذر/1398</p>
              <h3 className='position-absolute sticker2-3'>عنوان این مطلب در این بالا قرار میگیره و میتونه دراز باشه</h3>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  )
}

