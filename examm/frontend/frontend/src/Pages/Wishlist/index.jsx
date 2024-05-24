import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import WishlistProvider from '../../context/WishlistContext';
const Wishlist = () => {
    const [data, setdata]= useState()
const {addAndRemoveWishlist}= useContext(WishlistProvider)

 function getAll() {
    axios.get('http://localhost:3000/api/products/').then((res)=>{
        setdata(res.data)
        console.log(res.data);
     })
 }
  
useEffect(()=>{
    getAll()
},[])
  return (
    <div>
             <Helmet>
        <title>Wishlist</title>
       
      </Helmet>
        Wishlist</div>
  )
}

export default Wishlist