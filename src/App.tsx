// import "./App.css";
import React from "react";
import {routes} from "./routers/routerTree";
import {useRoutes} from "react-router-dom";

function App() {
    const routerTree = useRoutes(routes);
    return (
        <>
            {routerTree}
        </>
    )
}

export default App;

