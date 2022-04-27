import React, {useState} from "react";
import { Link } from 'react-router-dom';

function CreateProfile ({setUser,user,update}) {

    const [username, setUsername] =useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

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
            <form onSubmit={handleSubmit} className="form">
                <label for = "username">Username</label>
                    <input 
                        id="username" 
                        type="text"
                        className="createProfileInput"
                        value={username}
                        onChange={x => setUsername(x.target.value)}
                    />
                <label for = "password">Password</label>
                    <input 
                        id="password" 
                        type="password"
                        value={password}
                        className="createProfileInput"
                        onChange={x => setPassword(x.target.value)}
                        autoComplete= "current-password"
                    />
                <label for = "passwordConfirm">Confirm Password</label>
                    <input type="password"
                    className="createProfileInput"
                    id="password_confirm"
                    value={passwordConfirm}
                    onChange={ x => setPasswordConfirm(x.target.value)}
                    autoComplete= "current-password"
                    />
                    <br></br>
                    <div className="buttonChoice">
                        <button className="btn-gradient" onSubmit={handleSubmit} type="submit" >{loading? "Loading...": "Create Profile"}</button>
                            <Link to="/"> <button className='btn-gradient'>I Already Have a Profile</button></Link>
                </div>
            </form>
        </div>
    )
}

export default CreateProfile;