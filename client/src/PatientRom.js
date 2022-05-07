import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from 'react-bootstrap';
import "./App.css"

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
        <div className= "patientRom">
            <h4>Select Patient ROM Combination</h4>
                <Button className = "presentationButton" onClick = {handleSubmit1} type= "submit"><ul><li>Knee Flexion/Extension= Within Normal Limits</li><li>R1= Neutral</li><li>R2= 5 Degrees Dorsiflexion</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit2} type= "submit"><ul><li>Knee Flexion/Extension= Within Normal Limits</li><li>R1= 3 Degrees Plantarflexion</li><li>R2= Neutral</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit3} type= "submit"><ul><li>Knee Flexion/Extension= Within Normal Limits</li><li>R1= 5 Degrees Plantarflexion</li><li>R2= Neutral</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit4} type= "submit"><ul><li>Knee Flexion/Extension= Within Normal Limits</li><li>R1= 8 Degrees Plantarflexion</li><li>R2= 3 Degrees Plantarflexion</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit5} type= "submit"><ul><li>Knee Flexion/Extension= Within Normal Limits</li><li>R1= 10 Degrees Plantarflexion</li><li>R2= 5 Degrees Plantarflexion</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit6} type= "submit"><ul><li>Knee Flexion/Extension= -5 Degrees Extension</li><li>R1= 12 Degrees Plantarflexion</li><li>R2= 8 Degrees Plantarflexion</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit7} type= "submit"><ul><li>Knee Flexion/Extension= -5 Degrees Extension</li><li>R1= 15 Degrees Plantarflexion</li><li>R2= 10 Degrees Plantarflexion</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit8} type= "submit"><ul><li>Knee Flexion/Extension= -10 Degrees Extension</li><li>R1= 18 Degrees Plantarflexion</li><li>R2= 12 Degrees Plantarflexion</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit9} type= "submit"><ul><li>Knee Flexion/Extension= -10 Degrees Extension</li><li>R1= 20 Degrees Plantarflexion</li><li>R2= 15 Degrees Plantarflexion</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit10} type= "submit"><ul><li>Knee Flexion/Extension= -15 Degrees Extension</li><li>R1= 23 Degrees Plantarflexion</li><li>R2= 18 Degrees Plantarflexion</li></ul></Button>
        </div>
    )
}

export default PatientRom;