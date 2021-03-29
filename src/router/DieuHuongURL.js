import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './../components/Home';
import News from './../components/News';
import NewsDetail from './../components/NewsDetail';
import Contact from './../components/Contact';
class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                 <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/tin">
            <News />
          </Route>
          <Route path="/tin-chi-tiet">
            <NewsDetail />
          </Route>
          <Route path="/lien-he">
            <Contact />
          </Route>
        </Switch>
            </div>
        );
    }
}

export default DieuHuongURL;