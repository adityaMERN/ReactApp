import React from "react";
import Home from "../../Page/Home";
import Gallery from "../../Page/Gallery";
import Login from "../../Page/Login";
import SignUp from "../../Page/SignUp";
import Tensorflow from "../../Page/tensorflow";
export default [{
        path: "/",
        exact: true,
        component: () => < Home / > ,
        protected: null,
    },
    {
        path: "/gallery",
        //exact: true,
        component: () => < Gallery / > ,
        protected: "auth",
    },
    {
        path: "/login",
        // exact: true,
        component: () => < Login / > ,
        protected: "guest",
    },
    {
        path: "/signup",
        // exact: true,
        component: () => < SignUp / > ,
        protected: "guest",
    },
    {
        path: "/tensorflow",
        // exact: true,
        component: () => <Tensorflow/> ,
        protected: null,
    },
];