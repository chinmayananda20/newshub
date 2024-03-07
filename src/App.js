import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";

import News from "./components/News";
// import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country: "in",
    };
  }
  render() {
    return (
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route
              path="/"
              element={<News country={this.state.country} category="general" />}
            />
            <Route
              path="/categories/Sports"
              element={
                <News
                  country={this.state.country}
                  category="sports"
                  heading="- Sports"
                />
              }
            />
            <Route
              path="/categories/general"
              element={<News country={this.state.country} category="general" />}
            />
            <Route
              path="/categories/Technology"
              element={
                <News
                  country={this.state.country}
                  category="technology"
                  heading="- Technology"
                />
              }
            />
            <Route
              path="/categories/Entertainment"
              element={
                <News
                  country={this.state.country}
                  category="entertainment"
                  heading="- Entertainment"
                />
              }
            />
            <Route
              path="/categories/Health"
              element={
                <News
                  country={this.state.country}
                  category="health"
                  heading="- Health"
                />
              }
            />
            <Route
              path="/categories/Science"
              element={
                <News
                  country={this.state.country}
                  category="science"
                  heading="- Science"
                />
              }
            />
            <Route
              path="/categories/business"
              element={
                <News
                  country={this.state.country}
                  category="business"
                  heading="- business"
                />
              }
            />
          </Routes>
        </div>

      </Router>
    );
  }
}
