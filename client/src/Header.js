import React from "react";
import "./App.css";
import {Container, Row, Col, Navbar, Button} from "react-bootstrap"

function Header ({user,onLogout}){
    
    function handleLogout() {
          fetch("/logout", {
            method: "DELETE",
          }).then(() => onLogout());
        }
    
    return (
        <div>
            <Container>
            <Row>
            <Col></Col>
                <Col style={{display:'flex', justifyContent:'center'}}>
                    <h1 className="title"><b>OSKAR</b></h1>
                </Col>
                <Col style={{display:'flex', justifyContent:'right', paddingTop: 10}}>
                        {user ? (
                        <div class= "profile">
                        <p>Welcome, {user.username}!</p>
                        <br></br>
                        <Button bg="grey" class= "logoutButton" onClick={handleLogout}>Logout</Button>
                    </div>
                    ) : (
                    <div>
                        <Button><a className = "buttonText" href="/">Login</a></Button>
                    </div>
                    )}
                </Col>
            </Row>
            <Row>
                <Col style={{display:'flex', justifyContent:'center'}}>
                    <p className="acronym"><b>O</b>ptimal <b>S</b>egmental <b>K</b>inematics and <b>A</b>lignment approach to <b>R</b>ehabilitation</p>
                </Col>
            </Row>
                <div>
                    <Row>
                    <Col style={{display:'flex', justifyContent:'center'}}>
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
                            </Navbar.Brand>
                        </Navbar>
                    </Col>
                    </Row>
            </div>
        </Container>
    </div>
    )
  }
  
  export default Header;