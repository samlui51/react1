import React from "react";
import Header from "../Header/Header";
import "./TVShow.css";
import CategoryPrograms from "../CategoryPrograms/CategoryPrograms";

const TV_CATEGORIES = [
  {
    title: "週末追劇首選",
    programs: [
      {
        title: "星期三",
        id: 1,
        img: require("../../assets/programs/星期三.jpeg"),
      },
      {
        title: "First Love 初戀",
        id: 2,
        img: require("../../assets/programs/First Love 初戀.jpeg"),
      },
      {
        title: "星期三",
        id: 3,
        img: require("../../assets/programs/星期三.jpeg"),
      },
      {
        title: "First Love 初戀",
        id: 4,
        img: require("../../assets/programs/First Love 初戀.jpeg"),
      },
      {
        title: "星期三",
        id: 5,
        img: require("../../assets/programs/星期三.jpeg"),
      },
      {
        title: "First Love 初戀",
        id: 6,
        img: require("../../assets/programs/First Love 初戀.jpeg"),
      },
      {
        title: "星期三",
        id: 7,
        img: require("../../assets/programs/星期三.jpeg"),
      },
      {
        title: "First Love 初戀",
        id: 8,
        img: require("../../assets/programs/First Love 初戀.jpeg"),
      },
    ],
  },
  {
    title: "備受讚譽的節目",
    programs: [
        {
          title: "星期三",
          id: 1,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 2,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 3,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 4,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 5,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 6,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 7,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 8,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
      ],
  },
  {
    title: "最新發行",
    programs: [
        {
          title: "星期三",
          id: 1,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 2,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 3,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 4,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 5,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 6,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 7,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 8,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
      ],
  },
  {
    title: "華語節目",
    programs: [
        {
          title: "星期三",
          id: 1,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 2,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 3,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 4,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 5,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 6,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 7,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 8,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
      ],
  },
  {
    title: "熱門選擇",
    programs: [
        {
          title: "星期三",
          id: 1,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 2,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 3,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 4,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 5,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 6,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 7,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 8,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
      ],
  },
  {
    title: "韓劇",
    programs: [
        {
          title: "星期三",
          id: 1,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 2,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 3,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 4,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 5,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 6,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 7,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 8,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
      ],
  },
  {
    title: "獲獎肯定的節目",
    programs: [
        {
          title: "星期三",
          id: 1,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 2,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 3,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 4,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 5,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 6,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 7,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 8,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
      ],
  },
  {
    title: "過去一年推出的影片",
    programs: [
        {
          title: "星期三",
          id: 1,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 2,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 3,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 4,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 5,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 6,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 7,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 8,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
      ],
  },
  {
    title: "西洋節目",
    programs: [
        {
          title: "星期三",
          id: 1,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 2,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 3,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 4,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 5,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 6,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 7,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 8,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
      ],
  },
  {
    title: "國際節目",
    programs: [
        {
          title: "星期三",
          id: 1,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 2,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 3,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 4,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 5,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 6,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 7,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 8,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
      ],
  },
  {
    title: "懸疑節目",
    programs: [
        {
          title: "星期三",
          id: 1,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 2,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 3,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 4,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 5,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 6,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 7,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 8,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
      ],
  },
  {
    title: "韓國浪漫節目",
    programs: [
        {
          title: "星期三",
          id: 1,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 2,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 3,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 4,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 5,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 6,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 7,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 8,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
      ],
  },
  {
    title: "親子節目",
    programs: [
        {
          title: "星期三",
          id: 1,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 2,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 3,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 4,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 5,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 6,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 7,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 8,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
      ],
  },
  {
    title: "緊張刺激的節目",
    programs: [
        {
          title: "星期三",
          id: 1,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 2,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 3,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 4,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 5,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 6,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
        {
          title: "星期三",
          id: 7,
          img: require("../../assets/programs/星期三.jpeg"),
        },
        {
          title: "First Love 初戀",
          id: 8,
          img: require("../../assets/programs/First Love 初戀.jpeg"),
        },
      ],
  },
];

const TVShow = () => {
  const catProgs = TV_CATEGORIES.map((category, index) => {
    return (
      <CategoryPrograms
        key={index}
        title={category.title}
        programs={category.programs}
      ></CategoryPrograms>
    );
  });
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
        {catProgs}
      </div>
    </React.Fragment>
  );
};

export default TVShow;
