import React, {useState} from "react";
import {Link} from "react-router-dom"
import {Button, Row, Col} from 'react-bootstrap';
import "./App.css"


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
      <form onSubmit={handleSubmit} className="loginContainer">
          <Row>
              <Col style={{display:'flex', justifyContent:'center'}}>
                <label for="username" className = "loginUsernameText">Username:</label>
                    <input type="text" 
                        id="username" 
                        name="username"
                        className="usernameInput"
                        required value={username}
                        onChange={e => setUsername(e.target.value) }
                />
                    <p className="error">{error}</p>
                </Col>
            </Row>
                <Row >
                    <Col style={{display:'flex', justifyContent:'center'}}>
                        <label for="password" className = "loginPasswordText">Password:</label>
                            <input 
                                type="password" 
                                name="password" 
                                className="passwordInput"
                                required id="password"
                                value={password}
                                onChange={e=> setPassword(e.target.value)}
                        />  
                    <p className="error"> {pass}</p>
                </Col>
            </Row>
            <Row >
                <Col style={{display:'flex', justifyContent:'center'}}>
                    <div className="buttonSection">
                        <Button bg = "info" className= "loginButtons" type="submit"> 
                            {loading? <Link to="/CreatePatient"> "Loading..."</Link>: "Login" }
                        </Button>
                        <Link to="/CreateProfile"> <Button bg = "info" className= "loginButtons">Create Profile</Button> </Link>
                    </div>
                </Col>
            </Row>
        </form>  
    )
}

export default Login;