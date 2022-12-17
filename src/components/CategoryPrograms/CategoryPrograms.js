import React, { useEffect, useState } from "react";
import "./CategoryPrograms.css";

const CategoryPrograms = (props) => {
  const [displayLeftArrow, setDisplayLeftArrow] = useState(false);
  const [displayRightArrow, setDisplayRightArrow] = useState(false);

  useEffect(() => {
    const cat = document.getElementById(props.title);
    if (cat.scrollLeft > 0 && cat.scrollWidth > cat.clientWidth)
      setDisplayLeftArrow(true);
    if (
      cat.scrollWidth > cat.clientWidth &&
      cat.scrollLeft !== cat.scrollWidth - cat.clientWidth
    )
      setDisplayRightArrow(true);
    cat.addEventListener("scroll", () => {
      cat.scrollLeft > 0
        ? setDisplayLeftArrow(true)
        : setDisplayLeftArrow(false);
      cat.scrollLeft === cat.scrollWidth - cat.clientWidth
        ? setDisplayRightArrow(false)
        : setDisplayRightArrow(true);
    });
  }, [props.title]);

  const leftArrowHandler = () => {
    const cat = document.getElementById(props.title);
    cat.scrollBy({left: -700, behavior: 'smooth'})
  };

  const rightArrowHandler = () => {
    const cat = document.getElementById(props.title);
    cat.scrollBy({left: 700, behavior: 'smooth'})
  };

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
        <div className="arrow left">
          {displayLeftArrow && <span onClick={leftArrowHandler}>&#60;</span>}
        </div>
        <div id={props.title} className="programs">
          {programs}
        </div>
        <div className="arrow right">
          {displayRightArrow && <span onClick={rightArrowHandler}>&#62;</span>}
        </div>
      </div>
    </div>
  );
};

export default CategoryPrograms;
