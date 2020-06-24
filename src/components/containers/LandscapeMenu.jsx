import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class LandscapeMenu extends React.Component {
    static propTypes = {
        // content: PropTypes.shape({
        //     gameName: PropTypes.string.isRequired,
        //     gameDescription: PropTypes.string,
        //     imgURL: PropTypes.string,
        //     gameURL: PropTypes.string.isRequired,
        //     extraInfo: PropTypes.array
        // }).isRequired
    };

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return "Landscape menu";
    }
}
