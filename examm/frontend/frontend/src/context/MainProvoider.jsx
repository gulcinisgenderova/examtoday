import React from "react";
import BasketProvider from "./BasketContext";
import WishlistProvider from "./WishlistContext";

const MainProvoider = ({ children }) => {
  return (
    <BasketProvider>
      <WishlistProvider>{children}</WishlistProvider>
    </BasketProvider>
  );
};

export default MainProvoider;
