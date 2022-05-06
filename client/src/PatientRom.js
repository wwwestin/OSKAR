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
          body: JSON.stringify({patient_id: `${id}`, ankle_angle: 0}),
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
          body: JSON.stringify({patient_id: `${id}`, ankle_angle: 2}),
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

    function handleSubmit4(event){
        event.preventDefault()
        navigate('PatientMmt')
        fetch("/devices", {
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({patient_id: `${id}`, ankle_angle: 5}),
       })
       .then((r) => r.json())
       .then(handleAddDevice)
    }

    function handleSubmit5(event){
        event.preventDefault()
        navigate('PatientMmt')
        fetch("/devices", {
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({patient_id: `${id}`, ankle_angle: 8}),
       })
       .then((r) => r.json())
       .then(handleAddDevice)
    }

    function handleSubmit6(event){
        event.preventDefault()
        navigate('PatientMmt')
        fetch("/devices", {
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({patient_id: `${id}`, ankle_angle: 10}),
       })
       .then((r) => r.json())
       .then(handleAddDevice)
    }

    function handleSubmit7(event){
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

    function handleSubmit8(event){
        event.preventDefault()
        navigate('PatientMmt')
        fetch("/devices", {
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({patient_id: `${id}`, ankle_angle: 15}),
       })
       .then((r) => r.json())
       .then(handleAddDevice)
    }

    function handleSubmit9(event){
        event.preventDefault()
        navigate('PatientMmt')
        fetch("/devices", {
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({patient_id: `${id}`, ankle_angle: 18}),
       })
       .then((r) => r.json())
       .then(handleAddDevice)
    }

    function handleSubmit10(event){
        event.preventDefault()
        navigate('PatientMmt')
        fetch("/devices", {
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({patient_id: `${id}`, ankle_angle: 20}),
       })
       .then((r) => r.json())
       .then(handleAddDevice)
    }

    return (
        <div className= "patientGoals">
            <h4>Select Patient ROM Combination</h4>
                <button className = "presentationButton" onClick = {handleSubmit1} type= "submit">Knee Flexion/Extension= Within Normal Limits, R1= Neutral, R2= 5 Degrees Dorsiflexion</button>
                <button className = "presentationButton" onClick = {handleSubmit2} type= "submit">Knee Flexion/Extension= Within Normal Limits, R1= 3 Degrees Plantarflexion, R2= Neutral</button>
                <button className = "presentationButton" onClick = {handleSubmit3} type= "submit">Knee Flexion/Extension= Within Normal Limits, R1= 5 Degrees Plantarflexion, R2= Neutral</button>
                <button className = "presentationButton" onClick = {handleSubmit4} type= "submit">Knee Flexion/Extension= Within Normal Limits, R1= 8 Degrees Plantarflexion, R2= 3 Degrees Plantarflexion</button>
                <button className = "presentationButton" onClick = {handleSubmit5} type= "submit">Knee Flexion/Extension= Within Normal Limits, R1= 10 Degrees Plantarflexion, R2= 5 Degrees Plantarflexion</button>
                <button className = "presentationButton" onClick = {handleSubmit6} type= "submit">Knee Flexion/Extension= -5 Degrees Extension, R1= 12 Degrees Plantarflexion, R2= 8 Degrees Plantarflexion</button>
                <button className = "presentationButton" onClick = {handleSubmit7} type= "submit">Knee Flexion/Extension= -5 Degrees Extension, R1= 15 Degrees Plantarflexion, R2= 10 Degrees Plantarflexion</button>
                <button className = "presentationButton" onClick = {handleSubmit8} type= "submit">Knee Flexion/Extension= -10 Degrees Extension, R1= 18 Degrees Plantarflexion, R2= 12 Degrees Plantarflexion</button>
                <button className = "presentationButton" onClick = {handleSubmit9} type= "submit">Knee Flexion/Extension= -10 Degrees Extension, R1= 20 Degrees Plantarflexion, R2= 15 Degrees Plantarflexion</button>
                <button className = "presentationButton" onClick = {handleSubmit10} type= "submit">Knee Flexion/Extension= -15 Degrees Extension, R1= 23 Degrees Plantarflexion, R2= 18 Degrees Plantarflexion</button>
        </div>
    )
}

export default PatientRom;