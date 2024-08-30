import React from 'react'
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className='footer'>
     <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="footer-logo">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="footer-menu">
                <Nav className="m-auto my-2 my-lg-0 d-flex justify-content-center align-items-center pt-2">
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">MENU</Nav.Link>
            <Nav.Link href="#action3">ABOUT US</Nav.Link>
            <Nav.Link href="#action4">FACILITY</Nav.Link>
          </Nav>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="footer-social pt-3">
                <ul className='d-flex gap-4 justify-content-end'>
                    <li><a href="#"><FaFacebook className='text-white footer-icons' /></a></li>
                    <li><a href="#"><FaTwitter className='text-white footer-icons' /></a></li>
                    <li><a href="#"><CiLinkedin className='text-white footer-icons' /></a></li>
                    <li><a href="#"><FaYoutube className='text-white footer-icons' /></a></li>


                </ul>
                </div>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-lg-12">
                <div className="copyright text-center mt-5">
                   <h5>@copyright2024 | <span>Nadim Hasan</span></h5>
                </div>
            </div>
        </div>
     </div>
    </footer>
    </>
  )
}

export default Footer