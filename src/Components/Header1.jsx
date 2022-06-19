import React from 'react'
import logo from "../assets/images/1.jpg";
import ieltslogo from "../assets/images/ielts logo.png"



export default function Header1() {
  return (
    <div>
      <div className="card bg-dark text-white position-relative">
        <img src={logo} className="card-img blog-img1 "  alt="..." />
        <div className="card-img-overlay  ">
          <nav className="navbar navbar-expand-lg navbar-light bg-none mt-0" style={{height:"50px"}}>
            <div className="container-fluid">
              <a className="navbar-brand text-light" href="#">
              <i class="bi bi-search"></i>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item">
                    <a className="nav-link text-light" aria-current="page" href="#">وبلاگ</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">فروشگاه</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link  text-light" aria-current="page" href="#">وبلاگ</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">فروشگاه</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      نمونه کارها
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      صفحات
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      صفحه اصلی
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                 
                </ul>
                
              </div>
            </div>
          </nav>
          <div className="card-text sticker1 mb-0 text-white  ">  ما مردم را با یکدیگر  <p><span className='text-primary'>.متحد می کنیم</span></p></div>
          <div className='d-flex flex-column position-absolute sticker'>
          <img src={ieltslogo} className="card-img blog-img2 " style={{width:"150px"}} alt="..." />
          
          <div className='d-inline-flex mb-0 text-white '><div className='line mt-3 text-white'> </div><span>
            ما برای پیدا کردن نیازهای خود همکاری می کنیم 
            </span></div>
          
          
          <h5 className="card-text text-white"> مفهوم یک شرکت مشاوره مدیریت در نیویورک است که متخصص در ساخت مدل سازی اطلاعات است.</h5>
          <button type="button" className="btn btn-light rounded-pill w-25">شروع کنید</button>
          </div>
        </div> 
      </div>

    </div>
  )
}
