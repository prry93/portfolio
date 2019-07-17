import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Popup from "reactjs-popup";
import './index.css';

import Menu from './components/menu/Menu';
import Menuicon from './components/menu/Menuicon';
import Homepage from './components/home/home';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';


const App = () => (
  <div>

    <Router>
        <Popup
          modal
          overlayStyle={{ background: "rgba(255,255,255,0.98" }}
          closeOnDocumentClick={false}
          trigger={open => <Menuicon open={open} />}
        >
          {close => <Menu close={close} />}
        </Popup>

        <Route exact path="/" component={Homepage} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />

    </Router>
  </div>

)

ReactDOM.render(<App />, document.getElementById("root"));