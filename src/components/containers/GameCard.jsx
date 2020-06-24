import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import toggleOpen from "../../decorators/toggleOpen";

class GameCard extends React.Component {
    static propTypes = {
        content: PropTypes.shape({
            gameName: PropTypes.string.isRequired,
            gameDescription: PropTypes.string,
            imgURL: PropTypes.string,
            gameURL: PropTypes.string.isRequired,
            extraInfo: PropTypes.array
        }).isRequired
    };

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        const { content, toggle } = this.props;
        return (
            <div className="col-12 col-md-6 my-2">
                <div
                    onClick={toggle}
                    className="card border-secondary shadow"
                    style={{ cursor: "pointer" }}
                >
                    <img src={content.imgURL} className="card-img-top" alt="" />

                    <div className="card-body">
                        <h5 className="card-title">{content.gameName}</h5>
                        <p className="card-text">{content.gameDescription}</p>
                    </div>
                    {this.getFooter()}
                </div>
            </div>
        );
    }

    getFooter() {
        const { content, isOpen } = this.props;
        if (isOpen === true)
            return (
                <div className="card-footer text-right">
                    <small className="text-muted">
                        <p className="gamersNumber">{content.extraInfo[0]}</p>
                        <p className="gamersMaster">{content.extraInfo[1]}</p>
                        <p className="gamersTimer">{content.extraInfo[2]}</p>
                    </small>
                    <Link
                        to={content.gameURL}
                        className="btn btn-block btn-primary"
                    >
                        Начать игру
                    </Link>
                    <Link
                        to={content.gameURL + "/help"}
                        className="btn btn-block btn-secondary"
                    >
                        Открыть правила
                    </Link>
                </div>
            );
        else return null;
    }
}

export default toggleOpen(GameCard);
