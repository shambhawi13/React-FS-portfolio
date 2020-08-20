import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FrontEnd from "./pages/FrontEnd";
import Node from "./pages/Node";
import Angular from "./pages/Angular";
import ReactCmp from "./pages/React";
import Mern from "./pages/Mern";
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Footer from './pages/Footer';
// import { BrowserRouter as Router,Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
        <CssBaseline />
          <Nav />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/front-end" component={FrontEnd} />
            <Route exact path="/dashboard/node" component={Node} />
            <Route exact path="/dashboard/react" component={ReactCmp} />
            <Route exact path="/dashboard/angular" component={Angular} />
            <Route exact path="/dashboard/mern" component={Mern} />
            <Route component={NoMatch} />
          </Switch>
          <Footer></Footer>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
