// src/App.jsx
import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FAQs from "./components/FAQs/FAQs";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useWidgetUser } from './hooks/useWidget';
import { useAuth } from './contexts/AuthContext';

const App = () => {
  const { user } = useAuth(); 

  useWidgetUser(user ? {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    tenant: user.tenant ? {
      id: user.tenant.id,
      name: user.tenant.name
    } : undefined
  } : null);


  return (
    <>
    <ToastContainer />
      <div>
        <Header />
        <Hero />
        <FAQs />
        <Footer />
      </div>
    </>
  );
};

export default App;
