import React from "react";
import { Link } from 'react-router-dom';
// import logo from "../assets/images/1.jpg";


export default function Navbar() {
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
                            <li className="nav-item me-5">
                                <Link className="nav-link active "  to="/user/Home">
                                    ثبت نام
                                </Link>
                            </li>
                            <li className="nav-item me-5 ">
                                <Link className="nav-link" to="/user/">
                                   منابع ما
                                </Link>
                            </li>
                            <li className="nav-item">
                                 <Link className="nav-link" to="/user/">
                                    میز راهنما
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex  me-4">
                             
                                    <p className="text-white">09122256634</p>
                                    <i className="bi bi-telephone text-white"></i>
                                  
                            
                        </div>   
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}
