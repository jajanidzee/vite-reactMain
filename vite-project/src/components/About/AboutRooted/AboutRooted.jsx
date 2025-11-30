import React from "react";
import imghhero from "../../../Img/imagehhero.png"
function AboutRooted() {
  return (
    <div className="mt-[34px]">
 
      <h2 className="text-[40px] font-[EBGaramond]
      font-serif mb-[48px]">
        Rooted in the heart of Balmain, Rose is <br /> dedicated to enriching our
        community through <br /> a dining experience that celebrates the region's <br />
        bounty.
      </h2>
<img className="mb-[40px]" src={imghhero} alt="" />
 <hr className="MAinHr mt-[22px]"  style={{width:"100%",height:"1px",background:"#BA9787"}}/>
    </div>
  );
}

export default AboutRooted;
