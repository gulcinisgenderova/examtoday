import React from 'react'
import '../Footer/style.scss'
import Button from 'react-bootstrap/Button';
const Footer = () => {
  return (
    <div className='centerFooter'>
 <div className="card-container">
  <div className="cards">
    <h3>GET IN TOUCH</h3>
    <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
  </div>
  <div className="cards">
    <h3>CATEGORIES</h3>
    <li className='liHv'>Men</li>
    <li>Women</li>
    <li>Dresses</li>
    <li>Sunglasses</li>
  </div>
  <div className="cards">
    <h3>LINKS</h3>
    <li>Search</li>
    <li>About Us</li>
    <li> Contact Us</li>
    <li>Returns</li>
  </div>
  <div className="cards">
    <h3>HELP</h3>
    <li>Track Order </li>
    <li>Returns</li>
    <li>Shipping</li>
    <li>FAQs</li>
  </div>
  <div className="cards">
    <h3>NEWSLETTER</h3>
    <input className='emails' type="text" placeholder='email@example.com' />
    <div className='xett'></div>
    <Button variant="dark">Subscrise</Button>
  </div>
 </div>
    </div>
  )
}

export default Footer