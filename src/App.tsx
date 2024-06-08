import React from 'react';
import './App.css';
import { BrowserRouter as Rourter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/login';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
     <Rourter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Main /> }/>
        <Route path='/login' element={<Login /> }/>

      </Routes>
     </Rourter>
    </div>
  );
}

export default App;
