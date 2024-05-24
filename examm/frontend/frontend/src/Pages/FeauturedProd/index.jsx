import React, { useContext, useEffect, useState } from 'react'
import './style.scss'
import axios from 'axios';
import { FaBasketShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const FeauturedProd = () => {
    const [data, setdata] = useState();
    function getAll() {
        axios.get("http://localhost:3000/api/products/").then((res) => {
          setdata(res.data);
          console.log(res.data);
        });
      }
      
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div className='futureCenter'>
         <Helmet>
        <title>Products</title>
       
      </Helmet>
        <h1>FEATURED PRODUCTS</h1>
        <div className="carBox">

        {data &&
            data.map((x) => {
              return (
                <div className="cardS">
                <img  className='hovSh' src={x.img} alt="" />
                <p> {x.name}</p>
                <p> $ {x.price}</p>
                <p> {x.title}</p>

               <div className="buttons">
               <button className='basketButton'><FaBasketShopping /></button>
          
                  <button className='basketButton'><CiHeart /></button>
               </div>
            </div>
              );
            })}

       
        </div>
    </div>
  )
}

export default FeauturedProd