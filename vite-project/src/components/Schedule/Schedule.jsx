import React from "react";
import "./Schedule.css";

const Links = [
  {
    title: "Monday:",
    hour: " 5pm – 8pm",
  },
  {
    title: "Tuesday:",
    hour: " 5pm – 8pm",
  },
  {
    title: "Wednesday:",
    hour: " 5pm – 8pm",
  },
  {
    title: "Thursday:",
    hour: " 5pm – 10pm",
  },
  {
    title: "Friday:",
    hour: " 5pm – Late",
  },
  {
    title: "Saturday:",
    hour: " 5pm – Late",
  },
  {
    title: "Sunday:",
    hour: " Closed",
  },
];

function Schedule() {
  return (
    <>
      <nav>
        <ul className="ScheduleUl">
          {Links.map((link, index) => (
            <li key={link} className="ScheduleLi">
              {link.title} {link.hour}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Schedule;
