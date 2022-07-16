import React from "react";
import "./BookStyle.css";
import Travel from "../../assets/Travel .jpg";

const Book = () => {
  return (
    <div>
      <h2 className="book-header">Book</h2>
      <div name="book" className="book-container">
        <div className="book-card">
          <img src={Travel} alt="/" />
          <div className="book-text">
            <h3>Lorem Ipsum is simply dummy text</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galleyLorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <button>Book now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
