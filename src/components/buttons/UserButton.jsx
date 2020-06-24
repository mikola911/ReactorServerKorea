import React from "react";
import { Link } from "react-router-dom";

export default function UserButton(props) {
    // console.log(props.content);
    return (
        <Link
            to={props.content.url}
            className="btn btn-secondary"
            id={props.content.id}
            role="button"
            hidden={props.content.isHidden}
        >
            {props.content.label}
        </Link>
    );
}
