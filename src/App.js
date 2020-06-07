import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//mycomponents
import Home from './components/Home';
import Movie from './components/Movie';
import Unmovie from './components/Unmovie';
import Apimetro from './components/Apimetro';
import Apicountry from './components/Apicountry';


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
                <Link to='/' className="mt-2 mr-2">Images</Link>
                <Link to='/films' className="mt-2 mr-2">Films</Link>
                <NavDropdown title="API" id="basic-nav-dropdown">
                  <Link to='/api/metro' className="p-2">Métro</Link>
                  <br/>
                  <Link to='/api/pays' className="p-2">Pays</Link>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/films" component={Movie} />
            <Route path="/unfilm/:id" component={Unmovie} />
            <Route path="/api/metro" component={Apimetro} />
            <Route path="/api/pays" component={Apicountry} />
            <Route component={Unmovie}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
