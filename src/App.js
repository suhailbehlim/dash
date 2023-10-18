// import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Components/Pages/Home";
import SignIn from "./Components/Pages/Signin";
import SignUp from "./Components/Pages/Signup";
import Dashboard from "./Components/dashboard/Dashboard.jsx";
import Customers from "./Components/Pages/Customers";
import Forget from "./Components/Pages/Forget";
import Users from "./Components/Pages/Users";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/forget' element={<Forget />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/users' element={<Users/>} />





        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
