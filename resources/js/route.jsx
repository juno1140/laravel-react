import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Example from './pages/Example';
import Home from './pages/Home';
import PostEdit from './pages/PostEdit';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/example" element={<Example />} />
                <Route path='/'  element={<Home />} />
                <Route path='/post/edit/:id' element={<PostEdit />} />
            </Routes>
        </BrowserRouter>
    );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);