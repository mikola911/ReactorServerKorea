import React from "react";
import { Switch, Route } from "react-router-dom";
import GameArray from "./GamesArray";
import HomePage from "./HomePage";
import GamePage from "./GamePage";
import LandscapeMenu from "./LandscapeMenu";
import IconMenu from "./IconMenu";

export default function MainContainer() {
    return (
        <main role="main" className="container pt-4 mt-5">
            <div className="row">
                <div className="col-12 col-md-1">
                    <IconMenu />
                </div>

                <div className="col-12 col-md-8">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/games" component={GameArray} />
                        <Route path="/login" component={GamePage} />
                    </Switch>
                </div>

                <div className="col-12 col-md-3 d-none d-md-block">
                    <LandscapeMenu />
                </div>
            </div>
        </main>
    );
}
