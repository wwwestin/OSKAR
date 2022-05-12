import React from "react";
import "./App.css";
import {Container, Row, Col, Navbar, Button} from "react-bootstrap"
import logo from "/Users/westinhumble/Desktop/code/OSKAR/client/src/assets/logo.png"


function Header ({user,onLogout}){
    
    function handleLogout() {
          fetch("/logout", {
            method: "DELETE",
          }).then(() => onLogout());
        }
    
    return (
        <div >
            <Container>
                <Row>
                    <Col style={{display:'flex', justifyContent:'left'}}>
                        <img src={logo} alt="OSKAR logo"/>
                    </Col>
                </Row>
            <Row>
                <div>
                    {user ? 
                        <p style={{textAlign: "right"}}>Welcome, {user.username}!</p> : null}
                        
                </div>
            </Row>
                <div>
                    <Row>
                            <div>
                                <Col style={{display:'flex', justifyContent:'left'}}>
                                    <Navbar className="navBar" bg = "grey">
                                        <Navbar.Brand href="/">
                                            <img
                                                alt="Person Walking"
                                                src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/walking-icon-18-256.png"
                                                width="30"
                                                height="30"
                                                className="d-inline-block align-top"
                                            />{' '}
                                                <a className = "buttonText" href="/">Home</a>
                                                <a className = "buttonText" href="/CreatePatient">Add Patient</a>
                                                <a className = "buttonText" href="/EditProfile">Edit Profile</a>
                                                <a className = "buttonText" href="/SavedDevices">Saved Devices</a>
                                                <a className = "buttonText" href="/Resources">Resources</a>
                                            </Navbar.Brand>
                                                {user ? (
                                                    <a className = "buttonText" onClick={handleLogout}>Logout</a>
                                                ):(
                                                    <a className = "buttonText" href="/">Login</a>
                                                )}
                                    </Navbar>
                                </Col>
                            </div>
                    <Col></Col>
                </Row>
            </div>
        </Container>
    </div>
    )
  }
  
  export default Header;