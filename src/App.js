import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Header />
            <Switch>
              <Route exact path={["/", "/about"]}>
                <About />
              </Route>
              <Route exact path="/port">
                <Portfolio />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </Switch>
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
