import React from "react";
import "./HomeEntress.css";
const text = [
  {
    title:
      "Warm house-baked sourdough with whipped truffle butter & Maldon sea salt",
    money: "$18",
  },
  {
    title:
      "Hummus, whipped feta, and roasted red pepper dip with grilled pita & crostini",
    money: "$18",
  },
  {
    title:
      "A selection of three artisanal cheeses, fig jam, honeycomb, dried fruit, & nuts",
    money: "$18",
  },
  {
    title:
      "Prosciutto di Parma, chorizo, Manchego, Brie, smoked Gouda, olives, & house pickles",
    money: "$18",
  },
  {
    title:
      "Creamy burrata, basil oil, balsamic glaze, cherry tomatoes, & toasted sourdough",
    money: "$18",
  },
  {
    title: "Baby arugula, mission figs, goat cheese, Marcona almonds",
    money: "$18",
  },
];
function HomeEntress() {
  return (<>
    <div className="HomeEnterMainDiv">
      <p className="HomeEntressP">Entress</p>
      <nav className="HomeEntresstextnav">
        <ul className="HomeEntressUl">
          {text.map((text, index) => (
            <li key={index} className="HomeEntressLi">
         <span className="HomeEntressspan">{text.title}</span>
              <span className="HomeEntressspan2">{text.money}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
      <hr className="MAinHr"  style={{width:"100%",height:"1px",background:"#BA9787"}}/>
 </>
  );
}

export default HomeEntress;
