import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Popup from "reactjs-popup";
import './index.css';

import Menu from './components/menu/Menu';
import Menuicon from './components/menu/Menuicon';
import Homepage from './components/home/home';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch( err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch("/message");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
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

        {/* <p>{this.state.data}</p> */}

    </div>
  )}
}



export default App;
