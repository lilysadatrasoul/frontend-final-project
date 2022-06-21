import React from "react";
import { Link } from 'react-router-dom';



export default function Navbar1() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                   <div className="navbar-social-buttons" >
                   <a className="btn btn-social text-white btn-facebook" href="https://www.facebook.com"><i className="fa fa-facebook"></i> </a>
                   <a className="btn btn-social text-white btn-twitter" href="https://www.twitter.com"><i className="fa fa-twitter"></i> </a>
                   <a className="btn btn-social text-white btn-instagram" href="https://www.instagram.com"><i className="fa fa-instagram"></i> </a>
                    </div> 
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto me-auto mb-2 mb-lg-0">
                        


                            <li className="nav-item me-5 ms-5">
                                <a className="nav-link active " href="#" >
                                    ثبت نام
                                </a>
                            </li>
                            <li className="nav-item me-5 ">
                                <a className="nav-link" href="#">
                                   منابع ما
                                </a>
                            </li>
                            <li className="nav-item me-5 ">
                                 <a className="nav-link" href="#">
                                    میز راهنما
                                </a>
                            </li>
                            <li className="nav-item me-5 mt-2 ">
                                   <Link to="/user/Page2">
                                       صفحه بعد
                                   </Link>                                
                            </li>
                        </ul>
                        <div className="d-flex  me-5 ">
                             
                                    <p className="text-white me-2">09122256634 : تلفن</p>
                                    <i className="bi bi-telephone text-white"></i>
                                  
                            
                        </div>  
                                               
                    </div> 
                </div>
            </nav>
           
        </div>
    );
}
