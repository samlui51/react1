import React, { useEffect, useState } from "react";
import "./CategoryPrograms.css";

const CategoryPrograms = (props) => {
  const [displayLeftArrow, setDisplayLeftArrow] = useState(false);
  const [displayRightArrow, setDisplayRightArrow] = useState(false);

  useEffect(() => {
    const cat = document.getElementById(props.title);
    console.log(cat.scrollWidth, cat.clientWidth);
    // if (cat.scrollWidth)
  }, [props.title]);

  const programs = props.programs.map((program) => {
    return (
      <div className="program">
        <div className="thumbnail">
          <img src={program.img} alt={program.title} />
        </div>
        <div style={{ textAlign: "center" }}>{program.title}</div>
      </div>
    );
  });
  return (
    <div className="category">
      <div className="title">
        <div>{props.title}</div>
      </div>
      <div className="container">
      <div className="arrow">&#60;</div>
        {/* <div className="arrow">{displayLeftArrow && <span>&#60;</span>}</div> */}
        <div id={props.title} className="programs">
          {programs}
        </div>
        <div className="arrow">&#62;</div>
        {/* <div className="arrow">{displayRightArrow && <span>&#62;</span>}</div> */}
      </div>
    </div>
  );
};

export default CategoryPrograms;
