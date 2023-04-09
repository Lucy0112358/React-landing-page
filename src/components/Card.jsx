import React from "react";
import "../styles/card.scss";
import oval from "../assets/Oval.png";
import { data } from "../_mocData/Data";

function Card() {
  return (
    <>
      {data.map(
        ({ title, imageUrl, category, author, date, views, article }) => {
          return (
            <div className="card-item">
              <img src={imageUrl} alt="article-picture" />
              <p className="red-title">{category}</p>
              <p className="big-header">{title}</p>
              <div className="small-flex">
                <span className="author">{author}</span>
                <img className="oval" src={oval} srcSet={`${oval} 300w`} />
                <span className="date">{date}</span>
                <img className="oval" src={oval} srcSet={`${oval} 300w`} />
                <span className="date">{views}</span>
              </div>
              <p className="main-paragraph">{article}</p>
            </div>
          );
        }
      )}
    </>
  );
}

export default Card;
