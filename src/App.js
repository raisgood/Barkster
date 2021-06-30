import React from "react";
import Header from "./Header";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import BarkerCards from "./BarkerCards";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

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