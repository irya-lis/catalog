import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./screens/home/Home";
import IceCreamDetail from "./screens/iceCream-detail/IceCreamDetail";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/iceCream/:id" element={<IceCreamDetail/>}/>

                <Route path="*" element={<div>Not found</div>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Router;