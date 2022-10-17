import React from "react";

import './Text.css';

export default class Text extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <React.Fragment>
                <p className="card__text">
                    <span className="card__text_bold">{this.props.text}:</span> {this.props.param}
                </p>
            </React.Fragment>
        )
    }
}