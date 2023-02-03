import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import FirstStep from '../pages/FirstStep';
import SecondStep from '../pages/SecondStep';

export default function Router() {
    return (
        <BrowserRouter basename="">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/firststep/" element={<FirstStep />}/>
                <Route path="/secondstep/" element={<SecondStep />}/>
            </Routes>
        </BrowserRouter>
    );
}
