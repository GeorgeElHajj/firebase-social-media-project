import React from 'react';
import './App.css';
import { BrowserRouter as Rourter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import Login from './pages/login';
import Navbar from './components/navbar';
import { CreatePost } from './pages/create-post/create-post';
function App() {
  return (
    <div className="App">
     <Rourter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Main /> }/>
        <Route path='/login' element={<Login /> }/>
        <Route path='/createpost' element={<CreatePost /> }/>
      </Routes>
     </Rourter>
    </div>
  );
}

export default App;
