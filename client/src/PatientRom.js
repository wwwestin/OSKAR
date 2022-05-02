import React from "react";
import {useNavigate} from "react-router-dom";

function PatientRom ({handleAddDevice, currentPatient}) {

    const navigate = useNavigate();

    const newObj = Object.assign({}, ...currentPatient);
    
    const {id} = newObj;

    function handleSubmit1(event){
        event.preventDefault()
        navigate('PatientMmt')
        fetch("/devices", {
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({patient_id: `${id}`, ankle_angle: 7}),
       })
       .then((r) => r.json())
       .then(handleAddDevice)
    }

    function handleSubmit2(event){
        event.preventDefault()
        navigate('PatientMmt')
        fetch("/devices", {
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({patient_id: `${id}`, ankle_angle: 12}),
       })
       .then((r) => r.json())
       .then(handleAddDevice)
    }

    function handleSubmit3(event){
        event.preventDefault()
        navigate('PatientMmt')
        fetch("/devices", {
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({patient_id: `${id}`, ankle_angle: 3}),
       })
       .then((r) => r.json())
       .then(handleAddDevice)
    }

    return (
        <div className= "patientGoals">
            <h4>Select Patient ROM Combination</h4>
                <button className = "presentationButton" onClick = {handleSubmit1} type= "submit">Knee Flexion= 0 Degrees, R1= 10 Degrees PF, R2= 3 Degrees PF</button>
                <button className = "presentationButton" onClick = {handleSubmit2} type= "submit">Knee Flexion= 5 Degrees, R1= 15 Degrees PF, R2= 5 Degrees PF</button>
                <button className = "presentationButton" onClick = {handleSubmit3} type= "submit">Knee Flexion= 0 Degrees, R1= 5 Degrees PF, R2= 0 Degrees PF</button>
        </div>
    )
}

export default PatientRom;