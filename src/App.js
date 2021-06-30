import React from "react";
import Header from "./Header";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import BarkerCards from "./BarkerCards";
import SwipeButtons from "./SwipeButtons";
//import TinderCard from "react-tinder-card";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import axios from './axios';

function App() {
  
      return (
        <Router>
          <Switch>
            <Route path="/chat/:person">
              <Header backButton="/chat" />
              <ChatScreen />
            </Route>
            <Route path="/chat">
              <Header backButton="/" />
              <Chats />
              <SwipeButtons backButton="/"/>
            </Route>
            <Route path="/">
              <Header />
              <BarkerCards backButton="/"/>
  
            </Route>
          </Switch>
        </Router>
      );
  }
  
  export default App;



/*import './App.css';
import Header from "./Header";
import BarkerCards from "./BarkerCards";
import SwipeButtons from "./SwipeButtons";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
      <Route path="/chat/:person">
      <Header backButton="/chat" />
      <ChatScreen />
      </Route>
      <Route path="/chat">
      <Header backButton="/" />
        <Chats />
      </Route>
      <Route path="/">
      <Header />
        <BarkerCards />
        <SwipeButtons />
      </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;*/
