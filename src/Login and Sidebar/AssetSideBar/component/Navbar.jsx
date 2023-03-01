import React from "react";
import axios from 'axios'
import { useNavigate,useLocation } from "react-router-dom";
import {BsBook} from 'react-icons/bs'
import "../../../image/PI_Logo_tagline_CMYK_blue&white_thumb1.png"
import "./Navbar.css"
import {Link, Navigate} from "react-router-dom"
const Navbar = () => {

const navigate=useNavigate()


const logoutUser=()=>{
  navigate('/')
}
  return (
    <React.Fragment>
      <section>
        <div className='bg-blue-500 h-13 w-full flex items-center  space-x-4'>
           

            <div className="logo">
           
            </div>
            <div className="logout">
           
            <button onClick={logoutUser}>Log Out</button>
            </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;