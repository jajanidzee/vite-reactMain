import React from 'react'
import "./HomeSharing.css"

const menu = [
{
title:"Warm house-baked sourdough with whipped truffle butter & Maldon sea salt",
money:"$18"
},
{
title:"Hummus, whipped feta, and roasted red pepper dip with grilled pita & crostini",
money:"$18"
},
{
title:"Creamy burrata, basil oil, balsamic glaze, cherry tomatoes, & toasted sourdough",
money:"$18"
},
{
title:"Baby arugula, mission figs, goat cheese, Marcona almonds",
money:"$18"
},

]
function HomeSharing() {
  return (<>
    <div className='HomeSharingMainDiv'>

      <p className="HomeSharingP">Sharing</p>
      <nav className="HomeSharingNav">
        <ul className="HomeSharingUl">
          {menu.map((menu, index) =>(
            <li key={menu} className="HomeSharingLi">
              <span className="HomeSharingSpan">{menu.title}</span>
                      <span className="HomeSharingSpan2">{menu.money}</span>
            </li>
          )
          
          )}
        </ul>
      </nav>
    </div>
       <hr className="MAinHr"  style={{width:"100%",height:"1px",background:"#BA9787"}}/>
  </>
  )
}

export default HomeSharing