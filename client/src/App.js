import React, {useState, useEffect} from "react";
import {Route, Routes } from "react-router-dom";
import Login from "./Login";
import CreateProfile from "./CreateProfile";
import Header from "./Header";
import EditProfile from "./EditProfile";
import SavedDevices from "./SavedDevices";
import CreatePatient from "./CreatePatient";


function App() {

  const [user, setUser] = useState(null)

    useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user){
    setUser(user)
  }

   function handleLogout() {
    setUser(null);
  }
  
  
  return (
    <div className="App">
       <Header user={user} onLogout={handleLogout}/>
        <Routes>
          <Route exact path= "/" element={ <Login user={user} onLogin={handleLogin}/> } />
          <Route exact path= "/CreateProfile" element={ <CreateProfile setUser = {setUser} user = {user} /> } />
          <Route exact path= "/EditProfile" element = { <EditProfile /> } />
          <Route exact path= "/SavedDevices" element = { <SavedDevices /> } />
          <Route exact path= "/CreatePatient" element = { <CreatePatient /> } />
        </Routes>
    </div>
  );
}

export default App;
