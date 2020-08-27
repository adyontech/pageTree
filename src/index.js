import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { mainContext } from "./context/mainContext";

import Home from "./components/Home";
import Comments from "./components/Topics";
import "./style.css";

const BasicExample = () => (
  <Router>
    <div>
      <mainContext.Provider value="hello">
        <Route exact path="/" component={Home} />
        <Route path="/comments/:id" component={Comments} />
      </mainContext.Provider>
    </div>
  </Router>
);

render(<BasicExample />, document.getElementById("root"));
