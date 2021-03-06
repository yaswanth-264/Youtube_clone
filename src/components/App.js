import React from 'react';
import Header from "./Header.js"
import SideBar from "./SideBar"
import ItemsSection from './ItemsSection.js';
import SearchPage from './SearchPage.js';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
    <Router>
       <Header />
      <Switch>
        <Route path="/search/:searchTerm">
        <div className="app__next">
        <SideBar />
    <SearchPage />     
             </div>
        </Route>
        <Route path="/">
        <div className="app__next">
    <SideBar />
    <ItemsSection />
    </div>
        </Route>
      </Switch>
    </Router>
     
   </div>
  );
}

export default App;
