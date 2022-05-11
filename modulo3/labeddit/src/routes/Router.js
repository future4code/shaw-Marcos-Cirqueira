import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {RegistrationPage} from "../pages/RegistrationPage/RegistrationPage";
import {FeedPage} from "../pages/FeedPage/FeedPage";
import {PostPage} from "../pages/PostPage/PostPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<LoginPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/post/:id" element={<PostPage />} />
            </Routes>
        </BrowserRouter>

    )
}

