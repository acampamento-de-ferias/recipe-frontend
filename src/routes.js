import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DesignSystem from "./design-system";
import Details from "./pages/details";
import Home from "./pages/home";

const Routing = () => {
   return(
    <BrowserRouter>
        <Routes>
            <Route element = { <DesignSystem /> }  path="/" exact />
            <Route element = { <Home /> }  path="/home" />
            <Route element = { <Details /> }  path="/todo" />
        </Routes>
    </BrowserRouter>
   )
}

export default Routing;