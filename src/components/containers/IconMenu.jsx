import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class IconMenu extends React.Component {
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
        return (
            <div class="row">
                <div
                    class="col-2 col-md-12 m-3"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Help"
                >
                    <a data-toggle="modal" data-target="#help">
                        <img
                            class="img-fluid"
                            src="/web/images/icons/bulb.png"
                            alt="help"
                        />
                    </a>
                </div>
                <div
                    class="col-2 col-md-12 m-3"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Chat"
                >
                    <a data-toggle="modal" data-target="#chat">
                        <img
                            class="img-fluid"
                            src="/web/images/icons/letter.png"
                            alt="I like it!"
                        />
                    </a>
                </div>
                <div
                    class="col-2 col-md-12 m-3 d-block d-md-none"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="News"
                >
                    <a data-toggle="modal" data-target="#newsSmall">
                        <img
                            class="img-fluid"
                            src="/web/images/icons/bell.png"
                            alt="news"
                        />
                    </a>
                </div>
                <div
                    class="col-2 col-md-12 m-3"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Pattern"
                >
                    <a data-toggle="modal" data-target="#pattern">
                        <img
                            class="img-fluid"
                            src="/web/images/icons/folder.png"
                            alt="settings"
                        />
                    </a>
                </div>
            </div>
        );
    }
}
