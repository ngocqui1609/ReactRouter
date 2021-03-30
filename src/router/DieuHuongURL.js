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
                    <Route exact path="/" component={Home} />     
                    <Route exact path="/ReactRouter" component={Home} />            
                    <Route exact path="/home" component={Home} />                   
                    <Route exact path="/tin" component={News} />                   
                    <Route exact path="/tin-tuc/:slug.:id.html" component={NewsDetail} />                   
                    <Route exact path="/lien-he" component={Contact} />          
        </Switch>
            </div>
        );
    }
}

export default DieuHuongURL;