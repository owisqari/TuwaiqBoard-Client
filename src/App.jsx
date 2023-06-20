// import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import './App.css'
// import './index.css'
import Login from './pages/login'
import { Routes, Route } from 'react-router-dom';
import HomeWork from "../src/pages/HomeWork"
function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/homework' element={    <HomeWork/>}/>

    </Routes>
   
    </>
  );
}

export default App;