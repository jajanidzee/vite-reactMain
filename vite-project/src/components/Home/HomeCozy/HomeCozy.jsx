import React from "react";
import Buttons from "../../Buttons/Buttons";
import Schedule from "../../Schedule/Schedule";
import "./HomeCozy.css";
function HomeCozy() {
  return (
    <>
    <div className="HomeCozyMAinDiv">
      <div className="HomeCozyDivChild">
        <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
          <h2 className="HomeCozyH2">
            Cozy meets refined on Balmain's waterfront.
          </h2>
       <a href="https://www.nba.com/" className="HomeCozyA"><Buttons btn1="Book on Resy" btn2="Dining Experiences" /></a>
        </div>
        <div className="HomeCozyDivChild2">
          <hr className="HomeCozyHr"
            
          />
          <div className="HomeScheduleDiv">
            <p className="HomeAdreesP">
              24 Darling St <br /> Balmain
            </p>
            <Schedule />
          </div>
        </div>
      </div>
<div className="CozyImgDiv"></div>
    </div>
 <hr className="MAinHr"  style={{width:"100%",height:"1px",background:"#BA9787"}}/>
  </>
  );
}

export default HomeCozy;
