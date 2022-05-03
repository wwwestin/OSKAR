import React, {useState} from "react";

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
        <div>
            <p><b>WARNING! Changing Your Password Will Log You Out!</b></p>
            <form onSubmit={handleSubmit} className="form">
            <label for = "username">Username</label>
                    <input 
                        id="username" 
                        type="text"
                        className="changeProfileInput"
                        value={username}
                        onChange={x => setUsername(x.target.value)}
                    />
                <label for = "password">Type New Password</label>
                        <input 
                            id="password" 
                            type="password"
                            value={password}
                            className="changeProfileInput"
                            onChange={x => setPassword(x.target.value)}
                            autoComplete= "current-password"
                        />
                    <label for = "passwordConfirm">Confirm New Password</label>
                        <input type="password"
                        className="changeProfileInput"
                        id="password_confirm"
                        value={passwordConfirm}
                        onChange={ x => setPasswordConfirm(x.target.value)}
                        autoComplete= "current-password"
                        />
                        <br></br>
                        <div className="buttonChoice">
                        <button className="btn-gradient" onSubmit={handleSubmit} type="submit" >{loading? "Loading...": "Submit Password Change"}</button>
                </div>
            </form>

        </div>
    )
}

export default EditProfile;