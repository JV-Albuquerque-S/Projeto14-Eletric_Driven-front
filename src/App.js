import { Route, Routes, BrowserRouter } from "react-router-dom"
import { useState } from "react"

import UserContext from "./contexts/UserContext";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/Singup";
import UserPage from "./components/UserPage";
import { Reset } from "./Global-styles/reset";
import { BodyStyle } from "./Global-styles/body";

export default function App(){
    const [user, setUser] = useState();

    return(
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Reset />
                <BodyStyle />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/user-page" element={<UserPage />} />
                    </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}