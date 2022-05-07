import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from 'react-bootstrap';
import "./App.css"

function PatientMmt ({currentPatient}) {

    const newObj = Object.assign({}, ...currentPatient);
    
    const {id} = newObj;

    const navigate = useNavigate();

    function handleSubmit1(event){
        event.preventDefault()
        navigate('PatientGait')
        fetch(`/patients/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({mmt: "Knee Flexion= 5/5, Knee Extension = 5/5, Dorsiflexion = 2/5, Plantarflexion = 4/5"}),
       })
      }
    
      function handleSubmit2(event){
        event.preventDefault()
        navigate('PatientGait')
        fetch(`/patients/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({mmt: "Knee Flexion= 5/5, Knee Extension = 5/5, Dorsiflexion = 1/5, Plantarflexion = 3/5"}),
       })
      }

      function handleSubmit3(event){
        event.preventDefault()
        navigate('PatientGait')
        fetch(`/patients/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({mmt: "Knee Flexion= 5/5, Knee Extension = 4/5, Dorsiflexion = 1/5, Plantarflexion = 2/5"}),
       })
      }

      function handleSubmit4(event){
        event.preventDefault()
        navigate('PatientGait')
        fetch(`/patients/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({mmt: "Knee Flexion= 5/5, Knee Extension = 4/5, Dorsiflexion = 0/5, Plantarflexion = 1/5"}),
       })
      }

      function handleSubmit5(event){
        event.preventDefault()
        navigate('PatientGait')
        fetch(`/patients/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({mmt: "Knee Flexion= 4/5, Knee Extension = 3/5, Dorsiflexion = 0/5, Plantarflexion = 1/5"}),
       })
      }

      function handleSubmit6(event){
        event.preventDefault()
        navigate('PatientGait')
        fetch(`/patients/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({mmt: "Knee Flexion= 3/5, Knee Extension = 2/5, Dorsiflexion = 0/5, Plantarflexion = 1/5"}),
       })
      }

      function handleSubmit7(event){
        event.preventDefault()
        navigate('PatientGait')
        fetch(`/patients/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({mmt: "Knee Flexion= 2/5, Knee Extension = 2/5, Dorsiflexion = 0/5, Plantarflexion = 0/5"}),
       })
      }

      function handleSubmit8(event){
        event.preventDefault()
        navigate('PatientGait')
        fetch(`/patients/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({mmt: "Knee Flexion= 2/5, Knee Extension = 1/5, Dorsiflexion = 0/5, Plantarflexion = 0/5"}),
       })
      }

      function handleSubmit9(event){
        event.preventDefault()
        navigate('PatientGait')
        fetch(`/patients/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({mmt: "Knee Flexion= 1/5, Knee Extension = 1/5, Dorsiflexion = 0/5, Plantarflexion = 0/5"}),
       })
      }

      function handleSubmit10(event){
        event.preventDefault()
        navigate('PatientGait')
        fetch(`/patients/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({mmt: "Knee Flexion= 0/5, Knee Extension = 0/5, Dorsiflexion = 0/5, Plantarflexion = 0/5"}),
       })
      }

    return (
        <div className = "patientMMT">
           <h5>Select Patient MMT Combination</h5>
                <Button className = "presentationButton" onClick = {handleSubmit1} type= "submit"><ul><li>Knee Flexion= 5/5</li><li>Knee Extension = 5/5</li><li>Dorsiflexion = 2/5</li><li>Plantarflexion = 4/5</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit2} type= "submit"><ul><li>Knee Flexion= 5/5</li><li>Knee Extension = 5/5</li><li>Dorsiflexion = 1/5</li><li>Plantarflexion = 3/5</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit3} type= "submit"><ul><li>Knee Flexion= 5/5</li><li>Knee Extension = 4/5</li><li>Dorsiflexion = 1/5</li><li>Plantarflexion = 2/5</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit4} type= "submit"><ul><li>Knee Flexion= 5/5</li><li>Knee Extension = 4/5</li><li>Dorsiflexion = 0/5</li><li>Plantarflexion = 1/5</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit5} type= "submit"><ul><li>Knee Flexion= 4/5</li><li>Knee Extension = 3/5</li><li>Dorsiflexion = 0/5</li><li>Plantarflexion = 1/5</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit6} type= "submit"><ul><li>Knee Flexion= 3/5</li><li>Knee Extension = 2/5</li><li>Dorsiflexion = 0/5</li><li>Plantarflexion = 1/5</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit7} type= "submit"><ul><li>Knee Flexion= 2/5</li><li>Knee Extension = 2/5</li><li>Dorsiflexion = 0/5</li><li>Plantarflexion = 0/5</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit8} type= "submit"><ul><li>Knee Flexion= 2/5</li><li>Knee Extension = 1/5</li><li>Dorsiflexion = 0/5</li><li>Plantarflexion = 0/5</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit9} type= "submit"><ul><li>Knee Flexion= 1/5</li><li>Knee Extension = 1/5</li><li>Dorsiflexion = 0/5</li><li>Plantarflexion = 0/5</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit10} type= "submit"><ul><li>Knee Flexion= 0/5</li><li>Knee Extension = 0/5</li><li>Dorsiflexion = 0/5</li><li>Plantarflexion = 0/5</li></ul></Button>
        </div>
    )
}

export default PatientMmt;