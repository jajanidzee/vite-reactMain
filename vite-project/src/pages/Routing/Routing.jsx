import React from "react";
import { Link } from "react-router-dom";

function Routing() {
  return (
    <div className="flex justify-between gap-[610px]">
      <h1 className="HeaderH1 tex-[150px] font-[EBGaramond]
      font-serif"><Link to={"/"}>Rose</Link></h1>
      <ul className="flex gap-[8px] ">
        <li className="RouterLi text-[34px]"><Link to={"/About"}>About,</Link> </li>
        <li className="RouterLi text-[34px]">Experiences,</li>
        <li className="RouterLi text-[34px]">Email</li>
      </ul>
    </div>
  );
}

export default Routing;
