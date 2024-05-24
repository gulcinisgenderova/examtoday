import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import './style.scss'
const Navbar = () => {
  return (
    <div className='centerNav'>


<div className="logo">
<img src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png" alt="" />
</div>

<div className="lis">
        <li> <Link className='linkStyle' to="/">Home</Link>
        </li>
        <li>
        <Link className='linkStyle' to="/basket">Basket</Link>
        </li>
        <li>
        <Link className='linkStyle' to="/wishlist">Wishlist</Link>
        </li>
        <li>
        <Link  className='linkStyle' to="/detail">Detail</Link>
        </li>
    
        </div>
        <div className="iconBox">
        <FaUser />
        <IoIosLogOut />


        </div>
    </div>

  )
}

export default Navbar