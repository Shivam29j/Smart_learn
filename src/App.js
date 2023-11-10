import Home from "./Home.js";
import Navbar from "./components/Navbar.js";
import { Route,Routes} from "react-router-dom";
import React,{createContext, useReducer} from 'react';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Cards from "./components/Cards.jsx";
import Card1 from "./components/Card1.jsx";
import Card2 from "./components/Card2.jsx";
import Card3 from "./components/Card3.jsx";
import Logout from './components/Logout.js';
import {initialState,reducer} from "../src/reducer/UseReducer.js";


export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
    <Route path = "/" element = {<Cards /> } />    
    
    <Route path = "/signup" element = {<Signup />} />
    

    <Route path = "/signin" element = {<Login />} />
    

    <Route path = "/card" element = {<Cards /> } />
    

    <Route path = "/card1" element = {<Card1 /> } />
    
  
    <Route path = "/card2" element = {<Card2 /> } />
    

    <Route path = "/card3" element = {<Card3 /> } />
    
    <Route path = "/logout" element = {<Logout />} />
    
  </Routes>
  )
}


const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <>
    <UserContext.Provider value = {{state,dispatch}}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  );
};

export default App;
