import React, { createContext, useContext } from 'react'
import useLocalStorage from '../Hook/Localstorage'
 export  const WishlistContext= createContext()
const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist]= useLocalStorage('wishlist', [])
  function addAndRemoveWishlist(elem) {
    console.log(wishlist);
    const elemIndex= wishlist.findIndex((x)=>{
        x._id === elem._id
    })
    if (elemIndex===-1) {
        setWishlist(...wishlist, {...elem})
    } else{
        setWishlist( wishlist.filter((x)=>
        x._id !== elem._id))
    }
 }
    const data={
        wishlist,
        addAndRemoveWishlist
    }
  return (
    <WishlistContext.Provider value={data}>
{children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider