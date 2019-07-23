import React from "react";
import logo from "../static/soccer.png";
import tennis from "../static/tennis.png";
import basketball from "../static/basketball.svg";

function Header() {
  const categories = [
    "Soccer",
    "Rugbi",
    "Basket Ball",
    "Hockey",
    "Tennis",
    "Advertise",
    "Contact",
    "Settings"
  ];
  const cate = categories.map(number => (
    <div class="w-1/6 text-orange p-2" style={{color:"#f6993f"}}>{number}</div>
  ));


  return (
    <div class="fixed font-black h-16 text-white rounded-t-lg  w-full flex" style={{zIndex:"999",backgroundImage: "linear-gradient(#1a202c, #f6993f)", }}>

      <div
        class=""
      >
          <center>Instant Score</center>
      </div>
      <div
        class=" "
        style={{ backgroundImage: "linear-gradient(#1a202c, #f6993f)" }}
      >
      <center><img src={logo} style={{height:"50px", width:"100px"}}/></center>

      </div>
      <div
        class=" "
        style={{ backgroundImage: "linear-gradient(#1a202c, #f6993f)" }}
      >
      <center><img src={basketball} style={{height:"50px", width:"100px"}}/></center>

      </div>
      <div
        class=" "
        style={{ backgroundImage: "linear-gradient(#1a202c, #f6993f)" }}
      >
      <center><img src={tennis} style={{height:"50px", width:"100px"}}/></center>

      </div>
    </div>
  );
}

export default Header;
