import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function TwoExample() { 

  function BasicExample() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
  
          <hr />
  
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
  
  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Topics({ match }) {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
  
  function Topic({ match }) {
    return (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    );
  }

  function ParamsExample() {
    return (
      <Router>
        <div>
          <h2>Accounts</h2>
          <ul>
            <li>
              <Link to="/netflix">Netflix</Link>
            </li>
            <li>
              <Link to="/zillow-group">Zillow Group</Link>
            </li>
            <li>
              <Link to="/yahoo">Yahoo</Link>
            </li>
            <li>
              <Link to="/modus-create">Modus Create</Link>
            </li>
          </ul>
  
          <Route path="/:id" component={Child} />
  
          {/*
             It's possible to use regular expressions to control what param values should be matched.
                * "/order/asc"  - matched
                * "/order/desc" - matched
                * "/order/foo"  - not matched
          */}
          <Route
            path="/order/:direction(asc|desc)"
            component={ComponentWithRegex}
          />
        </div>
      </Router>
    );
  }
  
  function Child({ match }) {
    return (
      <div>
        <h3>ID: {match.params.id}</h3>
      </div>
    );
  }
  
  function ComponentWithRegex({ match }) {
    return (
      <div>
        <h3>Only asc/desc are allowed: {match.params.direction}</h3>
      </div>
    );
  }
}

export default TwoExample;