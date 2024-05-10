import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import {
    LOGIN_PATH,
    SIGNUP_PATH,
    BASE_PATH,
    EVENT_CREATE_PATH,
    EVENT_DETAIL_PATH,
    CHAT_PATH,
    PREF_PATH
} from "./domain/constants/paths";
import { LoginPage } from "./pages/login";

export const router = createBrowserRouter([
    {
        path: LOGIN_PATH,
        element: <LoginPage />,
    },
    {
        path: "*",
        element: <Navigate replace to="/login" />,
    },
]);