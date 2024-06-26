import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './comp/Header';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';


const App: React.FC = () => {

  const [join, setJoin] = useState<boolean>(false);

  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </div>
    </Router>


  );
}

export default App;
