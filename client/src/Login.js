import React, {useState} from "react";
import {Link} from "react-router-dom"
import { Container, Row, Col, Button } from 'react-bootstrap';


function Login ({onLogin}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [pass, setPass] = useState("");

    function handleSubmit(x){
        x.preventDefault()
        setLoading(true)

    fetch('/login', {
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({username,password}) 
    })
    .then(data => {
        setLoading(false)
        setUsername("")
        setPassword("")
        if (data.ok){
            data.json().then(el=> onLogin(el) )
        } else {
            data.json().catch(err=> {
                setError("Incorrect Username")
                setPass("Incorrect Password")
            })
        }
    })
}

    return (
        <Container fluid = "lg">
        <Row>
    <Col>
     <form onSubmit={handleSubmit} className="container">
        <label for="username"><b>Username</b> </label>
            <br></br>
            <input type="text" 
                id="username" 
                placeholder="username" 
                name="username"
                className="inputLogin"
                required value={username}
                onChange={e => setUsername(e.target.value) }
            />
        <p className="error">{error}</p>
                <br></br>
            <label for="password"> <b>Password</b> </label>
                <br></br>
                <input 
                    type="password" 
                    placeholder="password" 
                    name="password" 
                    className="inputLogin"
                    required id="password"
                    value={password}
                    onChange={ e=> setPassword(e.target.value)}
                />  
        <p className="error"> {pass}</p>
                <br></br>
            <div className="buttonSection">
                <Button className= "loginButtons" type="submit"> 
                    {loading? <Link to="/CreatePatient"> "Loading..."</Link>: "Login" }
                </Button>
            <Link to="/CreateProfile"> <Button className= "loginButtons">Create Profile</Button> </Link>
        </div>
    </form>
    </Col>
    </Row>
    </Container>
    )
}

export default Login;