import React from "react";
import "../components/styles/card.css";

const Card = ({ image, title, description }) => {
    return (
        <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">
                    <h3 className="card-title">{title}</h3>
                </div>
                <div className="imgProject-container">
                    <img src={image} alt={title} className="card-image" />
                </div>
                <div className="ag-courses-item_date-box">
                    <p className="card-description">{description}</p>
                    <span className="ag-courses-item_date">04.11.2022</span>
                </div>
            </a>
        </div>
    );
};

export default Card;
