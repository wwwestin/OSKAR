import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from 'react-bootstrap';
import "./App.css"

function PatientGoals ({currentPatient}) {

    const newObj = Object.assign({}, ...currentPatient);
    
    const {id} = newObj;

    const navigate = useNavigate();

    function handleSubmit1(event){
        event.preventDefault()
        navigate('PatientRom')
        fetch(`/patients/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({goal: "Full Gait Cycles"}),
       })
      }
    
      function handleSubmit2(event){
        event.preventDefault()
        navigate('PatientRom')
        fetch(`/patients/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({goal: "Stepping"}),
       })
      }

      function handleSubmit3(event){
        event.preventDefault()
        navigate('PatientRom')
        fetch(`/patients/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({goal: "Standing"}),
       })
      }
    
    return (
        <div className= "patientGoals">
            <h3>Select Patient Goals</h3>
                <Button className = "presentationButton" onClick={handleSubmit1} type="submit">Full Gait Cycles</Button>
                <Button className = "presentationButton" onClick={handleSubmit2} type="submit">Stepping</Button>
                <Button className = "presentationButton" onClick={handleSubmit3} type="submit">Standing</Button>
        </div>
    )
}

export default PatientGoals;


