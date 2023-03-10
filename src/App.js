import './App.css';
import Rot13 from './caesarsCipherDecoder';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class App extends Component {

  state = {
    val: ""
  };

  render() {
    return (
    
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home" style={{fontSize: "1.5em"}}>Caesars Cipher Decoder App</Navbar.Brand>
          </Container>
        </Navbar>
  
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-xs-1 col-sm-1"></div>
            <div class="col-lg-6 col-xs-10 col-sm-10">
              <br></br>
              <br></br>
              <br></br>
              <p style={{fontSize:"1.3em"}}>The purpose of this app is to decode a Caesars Cipher ROT13 encoded string which you can supply as input below</p>
              <br></br>
              <InputGroup size="lg">
                <Form.Label style={{width: "100%", textAlign: "left", fontSize: "1em"}} htmlFor="caesar-cipher-encoded-string-input">Enter String Here:</Form.Label>
                <Form.Control id="textInput"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  value={this.state.val}
                  onChange={e => this.setState({ val: e.target.value })}
                />
              </InputGroup>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <InputGroup size="lg">
                <Form.Label style={{width: "100%", textAlign: "left", fontSize: "1em"}} htmlFor="caesar-cipher-encoded-string-output">Output:</Form.Label>
                <Rot13 str={this.state.val}></Rot13>
              </InputGroup>
              
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              
            </div>
            <div class="col-lg-3 col-xs-1 col-sm-1"></div>
           
          </div>
          
        </div>
        <div id="footer" style={{backgroundColor: "#0D6EFD", height: "125px", width: "100%"}}>
          <br></br>
          <br></br>
          <p style={{color: "#FFFFFF"}}>Developed by <a style={{color: "#FFFFFF"}} href="https://github.com/cyprste2717218">@cyprste2717218</a></p>
        </div>
      </div>
    );
  }

 
 
}

