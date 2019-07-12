import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavbarPage from './components/NavBar/navbar';
import LandingPage from './pages/LandingPage/landingPage';
// import './App.css';
function App() {
  return (
    <>
      <NavbarPage />
      <LandingPage />
    </>
  );
}

export default App;
