import "./App.css";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{}, dispatch]= useStateValue();


  useEffect (() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if (authUser) {
        //The User just logged in / the user was logged in

        dispatch ({
          type:'SET_USER',
          user:authUser
        })
      } else {
        //The user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/login" element={<LoginPage/>} 
           />
           
           
          <Route path="/" element={<Home />}  />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
