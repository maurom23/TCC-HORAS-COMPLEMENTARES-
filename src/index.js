import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Start from "./pages/Start/Start";
import Login from "./pages/Login/Login";
import LoggedIn from "./pages/LoggedIn/LoggedIn";
import Home from "./pages/Home/Home";
import ChatList from "./pages/ChatList/ChatList";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import Chat from "./pages/Chat/Chat";
import Signup from "./pages/SignUp/Signup";
import SearchResults from "./pages/SearchResults/SearchResults";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Start />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Login isRegister />} />
                    <Route path="sign-up" element={<Signup />} />
                    <Route path="home" element={<LoggedIn />}>
                        <Route index element={<Home />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="search" element={<Search />} />
                        <Route
                            path="search-results"
                            element={<SearchResults />}
                        />
                        <Route path="chat" element={<ChatList />} />
                        <Route index path="chat/:id" element={<Chat />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
