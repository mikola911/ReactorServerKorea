import React from "react";
import { Link } from "react-router-dom";

export default function GameButton(props) {
    // console.log(props.content);
    return (
        <Link
            to={props.content.gameURL}
            className="btn btn-primary dropdown-item"
        >
            {props.content.gameName}
        </Link>
    );
}
