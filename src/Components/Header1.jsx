import React from 'react'
import logo from "../assets/images/1.jpg";
import ieltslogo from "../assets/images/ielts logo.png"



export default function Header1() {
  return (
    <div>
      <div className="card bg-dark text-white">
        <img src={logo} className="card-img " style={{height:"500px"}} alt="..." />
        <div className="card-img-overlay d-flex flex-wrap ">
          <nav className="navbar navbar-expand-lg navbar-light bg-none mt-0" style={{height:"50px"}}>
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
              <i class="bi bi-search"></i>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">وبلاگ</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">فروشگاه</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">وبلاگ</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">فروشگاه</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      نمونه کارها
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      صفحات
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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







          <img src={ieltslogo} className="card-img " style={{height:"200px",width:"150px"}} alt="..." />
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>

    </div>
  )
}
