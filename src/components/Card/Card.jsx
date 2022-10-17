import React from "react";
import Rating from "../Rating/Rating";
import Text from "../Text/Text";

import './Card.css';

export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        let hero = this.props.value;

        return (
            <div className="card">
                <h3 className="card__header">{hero.person}</h3>

                <Text text="Альтер эго" param={hero.alterego} />

                <Text text="Род деятельности" param={hero.occupation} />

                <Text text="Друзья" param={hero.friends} />

                <Text text="Суперсилы" param={hero.superpowers} />

                {/* <p className="card__text">
                    <span className="card__text_bold">Альтер эго:</span> {hero.alterego}
                </p> */}

                {/* <p className="card__text">
                    <span className="card__text_bold">Род деятельности:</span> {hero.occupation}
                </p> */}

                {/* <p className="card__text">
                    <span className="card__text_bold">Друзья:</span> {hero.friends}
                </p> */}

                {/* <p className="card__text">
                    <span className="card__text_bold">Суперсилы:</span> {hero.superpowers}
                </p> */}

                <img className="card__img" alt={hero.person} src={hero.photo} />

                {/* <p className="card__text">
                    <span className="card__text_bold">Подробнее:</span> {hero.more}
                </p> */}

                <Text text="Подробнее" param={hero.more} />

                <Rating />
            </div>
        )
    }
}