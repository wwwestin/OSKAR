import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import "./App.css"

function CreateProfile ({setUser}) {

    const [username, setUsername] =useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    console.log(error)
    
    function handleSubmit(e){
        e.preventDefault();
        setError([]);
        setLoading(true); 
        fetch("/signup", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                password_confirm: passwordConfirm
            }),
        }).then(response =>{
            setLoading(false)
            setUsername("")
            setPassword("")
            setPasswordConfirm("")
            console.log(response)
            if(response.ok){
                response.json().then(info=> {
                    setUser(info) 
                    })
            }else{
                response.json().catch(info=> setError(`invalid response`)  )
            }
        })
        e.target.reset() 
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="createProfileForm">
                <label for = "username"><b>Username:</b></label>
                    <input 
                        id="username" 
                        type="text"
                        className="createProfileInput"
                        value={username}
                        onChange={x => setUsername(x.target.value)}
                    />
                    <br></br>
                <label for = "password"><b>Password:</b></label>
                    <input 
                        id="password" 
                        type="password"
                        value={password}
                        className="createProfileInput"
                        onChange={x => setPassword(x.target.value)}
                        autoComplete= "current-password"
                    />
                    <br></br>
                <label for = "passwordConfirm"><b>Confirm Password:</b></label>
                    <input type="password"
                    className="createProfileInput"
                    id="password_confirm"
                    value={passwordConfirm}
                    onChange={ x => setPasswordConfirm(x.target.value)}
                    autoComplete= "current-password"
                    />
                    <br></br>
                    <div className="buttonChoice">
                        <Button  onSubmit={handleSubmit} type="submit" >{loading? "Loading...": "Create Profile"}</Button>
                            <Link to="/"> <Button>I Already Have a Profile</Button></Link>
                </div>
            </form>
        </div>
    )
}

export default CreateProfile;