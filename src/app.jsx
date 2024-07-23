import React from 'react';
import Header from './components/Header.jsx'
import { Outlet } from "react-router-dom";
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;