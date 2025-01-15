import Navbar from "./Navbar";
import Home from "./HOme";
import About from "./About";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function ReactRouterDom() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default ReactRouterDom