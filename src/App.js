import { Route, Routes, BrowserRouter } from "react-router-dom"
//import { useState } from "react"

import HomePage from "./components/HomePage";
import { Reset } from "./Global-styles/reset";
import { BodyStyle } from "./Global-styles/body";

export default function App(){

    return(
        <BrowserRouter>
        <Reset />
        <BodyStyle />
        <Routes>
            <Route path="/" element={<HomePage/>} />
        </Routes>
        </BrowserRouter>
    )
}