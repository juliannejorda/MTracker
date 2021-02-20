import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

// import About from "./About/About";
// import Contact from "./Contact/Contact";
// import Products from "./Product/Products";

import Intro from "./Intro";
import history from "./history";
import MangaForm from "./MangaForm";
import ReadingList from "./ReadingList";
import MangaContextProvider from "../contexts/MangaContext";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Intro} />

          <MangaContextProvider>
            <Route path="/Info" component={MangaForm} />
            <Route path="/ReadingList" component={ReadingList} />
          </MangaContextProvider>
          {/* reading list */}
          {/* <Route path="/Contact" component={Contact} />
          <Route path="/Products" component={Products} /> */}
        </Switch>
      </Router>
    );
  }
}
