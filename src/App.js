import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//mycomponents
import Home from './components/Home';
import Movie from './components/Movie';
import Unmovie from './components/Unmovie';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Router>
          <Navbar expand="lg" style={{"backgroundColor":"#7952b3"}}>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to='/' className="mr-2">Images</Link>
                <Link to='/films' className="mr-2">Films</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={Home} />
          <Route path="/films" component={Movie} />
          <Route path="/unfilm/:id" component={Unmovie} />
        </Router>
      </div>
    );
  }
}

export default App;
