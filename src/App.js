import styles from './styles.css';
import Rot13 from './caesarsCipherDecoder';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLockOpen } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
    
      <div className="App appFont" >
        <div style={{minHeight: "80vh"}} >
          <Navbar bg="primary" variant="dark">
            <Container style={{color: "#fff"}}>
              <Row>
                
                <Col xs={2} sm={1} md={1} lg={1} xl={2}>
                  <br></br>
                  <FontAwesomeIcon size='xl' icon={faLockOpen} />
                </Col>
                <Col xs={10} sm={11} md={11} lg={11} xl={2}>
                  <br></br>
                  <Navbar.Brand style={{fontSize: "1em"}} href="#home">Caesars Cipher Decoder App</Navbar.Brand>
                </Col>
             
           
              </Row>
          
            </Container>
          </Navbar>

          
          <Container>
            <Row className="justify-content-center">
              <Col xl={3} lg={3} md={1}  sm={2} xs={1}></Col> 
              <Col xl={6}lg={6} md={10} sm={8} xs={9} >
        
                <br></br>
                <br></br>
                <p>The purpose of this app is to decode a Caesars Cipher ROT13 encoded string which you can supply as input below</p>
                <hr></hr>
                <br></br>
                <br></br>
                <InputGroup size="lg">
                  <Form.Label style={{width: "100%", textAlign: "left"}} htmlFor="caesar-cipher-encoded-string-input">Enter String Here:</Form.Label>
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
                <InputGroup size="lg">
                  <Form.Label style={{width: "100%", textAlign: "left"}} htmlFor="caesar-cipher-encoded-string-output">Output:</Form.Label>
                  <Rot13 str={this.state.val}></Rot13>
                </InputGroup>
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
              </Col>
              <Col xl={3} lg={3} md={1} sm={2} xs={1}></Col>
            
            </Row>
            
          </Container>
        
        </div>

        <footer>
          
          <div style={{textAlign: "left"}} className="d-flex justify-content-space-between footer">
            <br></br>
            <br></br>
            <Container>
              <Row>
               
                <Col xs={7} sm={8} md={9} lg={9} xl={10}> 
                  <p>Developed by <a className="footerTextLink" href="https://github.com/cyprste2717218">@cyprste2717218</a></p>
                </Col>
                <Col xs={5} sm={4} md={3} lg={3} xl={2}>
                  <Container>
                    <Row>
                     
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <a  style={{color: "#fff"}} href="https://github.com/cyprste2717218">
                          <FontAwesomeIcon className='icon' size='2xl'  icon={faGithub} />
                        
                        </a>
                      </Col>
                    
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}> 
                        <a  style={{color: "#fff"}} href="https://www.linkedin.com/in/stephen-ingham-/">
                            <FontAwesomeIcon className='icon' size='2xl'  icon={faLinkedin} />
                           
                        </a>
                      </Col>
                     

                    </Row>

                  </Container>

                </Col>
         


              </Row>
              
            </Container>
          </div>
      
        </footer>
   
      </div>
    );
  }

 
 
}
