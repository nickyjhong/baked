import React from 'react';
import Navbar from './components/Navbar';
import Routes from './Routes';
import Footer from './components/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="page-container">
      <Navbar />
      <Routes />
      <ToastContainer
        autoClose={2000}
        closeOnClick={true}
        newestOnTop={true}
        position="top-right"
        />
      <Footer />
    </div>
  );
};

export default App;
