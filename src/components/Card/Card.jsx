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

        let arrText = hero.more.split('\n');

        let renderMore = [];
        for (let i = 0; i < arrText.length; i++) {
            renderMore.push(<React.Fragment key={i}><span>{arrText[i]}</span><br /><br /></React.Fragment>);          
        }

        return (
            <div className="card">
                <h3 className="card__header">{hero.person}</h3>

                <Text text="Альтер эго" param={hero.alterego} />

                <Text text="Род деятельности" param={hero.occupation} />

                <Text text="Друзья" param={hero.friends} />

                <Text text="Суперсилы" param={hero.superpowers} />

                <img className="card__img" alt={hero.person} src={hero.photo} />

                <Text text="Подробнее" param={renderMore} />

                <Rating />
            </div>
        )
    }
}