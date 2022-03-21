import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import Lists from './Lists';
import Sidebar from './Sidebar';

const App = () => (
  <BrowserRouter>
    <div id="options" className="options">
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/list" exact element={<Lists />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
