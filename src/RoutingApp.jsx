import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Error404 from './pages/Error404.jsx';

const RoutingApp = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                            <Route path='/about' element={<About />} />
                    <Route path='/blogs' element={<Blog />} />
                       <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </>
      );
}
 
export default RoutingApp;