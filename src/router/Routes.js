import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import React from "react";

export const routes = [
    { path: '/about', component: <About/>, exact: false },
    { path: '/posts', component: <Posts/>, exact: true },
    { path: '/posts/:id', component: <PostIdPage/>, exact: true },
    { path: '*', component: <Error/>, exact: false },
    { path: '/', component: <Posts/>, exact: false },
];