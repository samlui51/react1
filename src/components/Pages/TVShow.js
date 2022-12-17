import React from "react";
import Header from "../Header/Header";
import "./TVShow.css";

const TVShow = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="background">
        <div className="top">
          <div className="description">
            <div className="title">節目</div>
            <div className="content">
              這年頭小螢幕作品也能大放異彩。從情境劇、戲劇、旅遊節目到脫口秀，最精彩的電視節目都在這裡。
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TVShow;
