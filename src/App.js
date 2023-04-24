
import React from 'react';
import stockData from './data';
import Nav from './components/Nav';
import Main from './components/Main';
import { BrowserRouter} from "react-router-dom";
import "./Style.css";
function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Main stockData={stockData} />
      </BrowserRouter>
    </div>
  );
}

export default App;

// export default withRouter(App)
