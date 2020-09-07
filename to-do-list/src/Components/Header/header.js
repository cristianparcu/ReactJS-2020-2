import React from "react";
import "../../App";
import heading from './header.module.css';


  const Header = () => {
    return(
  <div className={heading.mydiv}>
    <h1 className={heading.myh1}>To do List</h1>
  </div>
  )
  }


export default Header;
