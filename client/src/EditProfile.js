import React, {useState} from "react";
import {Button} from 'react-bootstrap';
import "./App.css"

function EditProfile ({setUser}) {

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
        fetch("/me", {
            method: "PATCH",
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
        <div className = "editProfile">
            <p><b>WARNING! Changing Your Password Will Log You Out!</b></p>
            <form onSubmit={handleSubmit} className="form">
            <label for = "username"><b>Username</b></label>
                    <input 
                        id="username" 
                        type="text"
                        className="changeProfileInput"
                        value={username}
                        onChange={x => setUsername(x.target.value)}
                    />
                    <label for = "password"><b>Type New Password</b></label>
                        <input 
                            id="password" 
                            type="password"
                            value={password}
                            className="changeProfileInput"
                            onChange={x => setPassword(x.target.value)}
                            autoComplete= "current-password"
                        />
                    <label for = "passwordConfirm"><b>Confirm New Password</b></label>
                        <input type="password"
                        className="changeProfileInput"
                        id="password_confirm"
                        value={passwordConfirm}
                        onChange={ x => setPasswordConfirm(x.target.value)}
                        autoComplete= "current-password"
                        />
                        <br></br>
                        <div className="buttonChoice">
                    <Button className="btn-gradient" onSubmit={handleSubmit} type="submit" >{loading? "Loading...": "Submit Password Change"}</Button>
                </div>
            </form>
        </div>
    )
}

export default EditProfile;