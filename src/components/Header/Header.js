import "./Header.css";
import netflix from "../../assets/header/Netflix_2015_logo.svg"
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={netflix} alt="logo"/>
            </div>
            <div className="text1 buttons">
                <div className="button">不限時數的節目與電影</div>
                <div className="button red-button button-hover">立即加入</div>
                <div className="button normal-button button-hover">登入</div>
            </div>
        </div>
    )
};

export default Header;
