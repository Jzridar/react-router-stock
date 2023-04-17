
import React from 'react';
import stockData from './data';
import Nav from './components/Nav';
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Style.css";
function App(props) {
  return (
    <div>
      <Router>
        <Nav />
        <Main stockData={stockData} />
      </Router>
    </div>
  );
}

export default App;
// export default withRouter(App)
