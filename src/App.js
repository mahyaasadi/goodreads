import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import User from "./view/pages/user";
import Book from "./view/pages/book";
import Home from "./view/pages/home";
import Search from "./view/pages/search";
import About from "./view/pages/about";
import Gasfree from "./view/pages/gasfree";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="home-page h-full">
        <nav className="navbar h-18 w-full fixed z-50">
          <ul className="flex justify-start p-2 ml-8">
            <li className="p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2 ml-3">
              <Link to="/user/1">User</Link>
            </li>
            <li className="p-2 ml-3">
              <Link to={"/book/search"}>Books</Link>
            </li>
            <li className="p-2 ml-3">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="p-2 ml-3">
              <Link to={"/gas-free"}>Gas Free</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route path="/book/search">
              <Search />
            </Route>
            <Route path="/book/:id">
              <Book />
            </Route>
            <Route path="/user/:id">
              <User />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/gas-free">
              <Gasfree />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
