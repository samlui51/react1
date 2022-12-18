import "./Header.css";
import netflix from "../../assets/header/Netflix_2015_logo.svg";
import smallNetflix from "../../assets/header/netflix-1-logo-svgrepo-com.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [imgSrc, setImgSrc] = useState(netflix);

  useEffect(() => {
    window.addEventListener("resize", updateSrc);
  }, []);

  const updateSrc = () => {
    if (window.innerWidth <= 600) setImgSrc(smallNetflix);
    else setImgSrc(netflix);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={imgSrc} alt="logo" />
      </div>
      <div className="text1 buttons">
        <div className="button mobile-hidden">不限時數的節目與電影</div>
        <div className="button red-button">立即加入</div>
        <div className="button normal-button">登入</div>
      </div>
    </div>
  );
};

export default Header;
