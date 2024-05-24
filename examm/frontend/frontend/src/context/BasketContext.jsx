import React, { createContext } from 'react'
import useLocalStorage from '../Hook/Localstorage'
 export const Basketcontext= createContext()

const BasketProvider = ({children}) => {
    const [basket, setBasket] = useLocalStorage('basket', [])
    const data={
        basket
    }
  return (
   <Basketcontext.Provider value={data}>
{children}
   </Basketcontext.Provider>
  )
}

export default BasketProvider