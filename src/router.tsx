import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import {
    LOGIN_PATH,
    SIGNUP_PATH,
    BASE_PATH,
    EVENT_CREATE_PATH,
    EVENT_DETAIL_PATH,
    CREDIT_PATH,
    CHAT_PATH,
    PREF_PATH
} from "./domain/constants/paths";
import { LoginPage } from "./pages/login";
import { SignUpPage } from "./pages/signup";
import { MainPage } from "./pages/main";
import { PostPage } from "./pages/post";

export const router = createBrowserRouter([
    {
        path: LOGIN_PATH,
        element: <LoginPage />,
    },
    {
        path: SIGNUP_PATH,
        element: <SignUpPage />,
    },
    {
        path: EVENT_CREATE_PATH,
        element: <PostPage />,
    },
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "*",
        element: <Navigate replace to={LOGIN_PATH} />,
    },
]);