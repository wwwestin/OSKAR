import React, {useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import CreateProfile from "./CreateProfile";
import Header from "./Header";
import EditProfile from "./EditProfile";
import SavedDevices from "./SavedDevices";
import CreatePatient from "./CreatePatient";
import PatientGoals from "./PatientGoals";
import PatientRom from "./PatientRom";
import PatientMmt from "./PatientMmt";
import PatientGait from "./PatientGait";
import DeviceRec from "./DeviceRec";


function App() {

  const [user, setUser] = useState(null);
  const [currentPatient, setCurrentPatient] = useState([]);
  const [currentDevice, setCurrentDevice] = useState([]);

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

  function handleAddPatient(newestPatient){
    setCurrentPatient([...currentPatient, newestPatient])   
  }

  function handleAddDevice(newestDevice){
    setCurrentDevice([...currentDevice, newestDevice])
  }
  
  return (
    <div className="App">
       <Header user={user} onLogout={handleLogout}/>
        <Routes>
          <Route exact path= "/" element={ <Login user={user} onLogin={handleLogin}/> } />
          <Route exact path= "/CreateProfile" element={ <CreateProfile setUser = {setUser} user = {user} /> } />
          <Route exact path= "/EditProfile" element = { <EditProfile /> } />
          <Route exact path= "/SavedDevices" element = { <SavedDevices /> } />
          <Route exact path= "/CreatePatient" element = { <CreatePatient handleAddPatient={handleAddPatient}/> } />
          <Route exact path= "/PatientGoals" element = { <PatientGoals currentPatient = {currentPatient} /> } />
          <Route exact path= "/CreatePatient/PatientGoals" element = { <PatientGoals currentPatient = {currentPatient} /> } />
          <Route exact path= "/PatientRom" element = { <PatientRom handleAddDevice={handleAddDevice} currentPatient = {currentPatient} /> } />
          <Route exact path= "/CreatePatient/PatientGoals/PatientRom" element = { <PatientRom handleAddDevice={handleAddDevice} currentPatient = {currentPatient}/> } />
          <Route exact path= "/PatientMmt" element = { <PatientMmt currentPatient = {currentPatient} /> } />
          <Route exact path= "/CreatePatient/PatientGoals/PatientRom/PatientMmt" element = { <PatientMmt currentPatient = {currentPatient} /> } />
          <Route exact path= "/PatientGait" element = { <PatientGait currentDevice = {currentDevice} /> } />
          <Route exact path= "/CreatePatient/PatientGoals/PatientRom/PatientMmt/PatientGait" element = { <PatientGait currentDevice = {currentDevice} /> } />
          <Route exact path= "/DeviceRec" element = { <DeviceRec currentPatient = {currentPatient} currentDevice = {currentDevice} /> } />
          <Route exact path= "/CreatePatient/PatientGoals/PatientRom/PatientMmt/PatientGait/DeviceRec" element = { <DeviceRec currentPatient = {currentPatient} currentDevice = {currentDevice} /> } />
        </Routes>
    </div>
  );
}

export default App;
