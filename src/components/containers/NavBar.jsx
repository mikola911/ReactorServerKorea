import React from "react";
import { Link } from "react-router-dom";
import GameButton from "../buttons/GameButton";
import UserButton from "../buttons/UserButton";
import gameList from "../../gameList";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
            <div className="container">
                <Link to="#" className="navbar-brand">
                    НЁХ
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul
                        id="mainMenuItems"
                        className="navbar-nav mr-auto topMenuUl"
                    >
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Главная
                            </Link>
                        </li>
                        <li className="nav-item dropdown active">
                            <button
                                className="nav-link btn dropdown-toggle"
                                id="navbarDropdown"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Игры
                            </button>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <GameButton content={gameList[0]} />
                                <GameButton content={gameList[1]} />
                                <GameButton content={gameList[2]} />
                                <GameButton content={gameList[3]} />
                                <div className="dropdown-divider" />
                                <Link
                                    className="dropdown-item active"
                                    to="/games"
                                >
                                    Все игры
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item ">
                            <Link
                                className="nav-link disabled"
                                id="navLinkSettings"
                                to="/games_settings"
                            >
                                Настройка игр
                            </Link>
                        </li>
                    </ul>
                    <div className="btn-group align-right" role="group">
                        <UserButton
                            content={{
                                url: "/login",
                                id: "buttonLogin",
                                label: "LogIn",
                                isHidden: false
                            }}
                        />
                        <UserButton
                            content={{
                                url: "/users/reg",
                                id: "buttonReg",
                                label: "New user",
                                isHidden: true
                            }}
                        />
                        <UserButton
                            content={{
                                url: "/admin",
                                id: "buttonUser",
                                label: "User",
                                isHidden: false
                            }}
                        />
                        <UserButton
                            content={{
                                url: "/logout",
                                id: "buttonLogout",
                                label: "LogOut",
                                isHidden: false
                            }}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
