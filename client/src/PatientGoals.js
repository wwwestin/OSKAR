import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function PatientGoals () {

    const navigate = useNavigate();

    //const [newGoal, setNewGoal] = useState([]);

    function handleSubmit1(event){
        event.preventDefault()
        navigate('PatientRom')
        fetch("/devices", {
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify("Full Gait Cycles"),
       })
      }
    
      function handleSubmit2(event){
        event.preventDefault()
        navigate('PatientRom')
        fetch("/devices", {
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify("Stepping"),
       })
      }

      function handleSubmit3(event){
        event.preventDefault()
        navigate('PatientRom')
        fetch("/devices", {
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify("Standing"),
       })
      }
    
    return (
        <div className= "patientGoals">
            <h3>Select Patient Goals</h3>
                <button className = "presentationButton" onClick={handleSubmit1} type="submit">Full Gait Cycles</button>
                <button className = "presentationButton" onClick={handleSubmit2} type="submit">Stepping</button>
                <button className = "presentationButton" onClick={handleSubmit3} type="submit">Standing</button>
        </div>
    )
}

export default PatientGoals;

