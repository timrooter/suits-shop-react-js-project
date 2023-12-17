import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from "./Pages/AboutUs/AboutUs";
import MainPage from "./Pages/MainPage/MainPage";
import Reviews from "./Pages/Reviews/Reviews";
import LogOrReg from "./Pages/LogOrReg/LogOrReg";
import Articles from "./Pages/Articles/Articles";
import Account from "./Pages/Account/Account";

class App extends React.Component {


  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/logorreg" element={<LogOrReg />} />
            <Route path="/articles" element={<Articles/>} />
            <Route path="/myaccount" element={<Account/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
