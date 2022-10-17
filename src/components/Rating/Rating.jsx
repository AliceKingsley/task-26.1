import React from "react";

import './Rating.css';

export default class Rating extends React.Component {

    

    render() {
        let stars = [];
        for (let i = 0; i < 10; i++) {
            stars.push(<span className="star" key={i}></span>);          
        }

        return (
            <div className="rating-stars">
                {stars}
                {/* <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span> */}
            </div>
        )
    }
}