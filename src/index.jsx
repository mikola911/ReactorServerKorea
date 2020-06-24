import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/containers/NavBar";
import MainContainer from "./components/containers/MainContainer";
import Footer from "./components/containers/Footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
    // <React.StrictMode>
    <BrowserRouter>
        <NavBar />
        <MainContainer />
        <Footer />
    </BrowserRouter>,
    // </React.StrictMode>
    rootElement
);
