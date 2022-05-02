import React from "react";
import {useNavigate} from "react-router-dom";

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
          body: JSON.stringify({mmt: "Knee Flexion= 3/5, Knee Extension = 3/5, Dorsiflexion = 1/5, Plantarflexion = 2/5"}),
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
          body: JSON.stringify({mmt: "Knee Flexion= 2/5, Knee Extension = 4/5, Dorsiflexion = 1/5, Plantarflexion = 1/5"}),
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
          body: JSON.stringify({mmt: "Knee Flexion= 2/5, Knee Extension = 1/5, Dorsiflexion = 0/5, Plantarflexion = 1/5"}),
       })
      }

    return (
        <div className = "patientMMT">
           <h5>Select Patient MMT Combination</h5>
                <button className = "presentationButton" onClick = {handleSubmit1} type= "submit">Knee Flexion= 3/5, Knee Extension = 3/5, Dorsiflexion = 1/5, Plantarflexion = 2/5</button>
                <button className = "presentationButton" onClick = {handleSubmit2} type= "submit">Knee Flexion= 2/5, Knee Extension = 4/5, Dorsiflexion = 1/5, Plantarflexion = 1/5</button>
                <button className = "presentationButton" onClick = {handleSubmit3} type= "submit">Knee Flexion= 2/5, Knee Extension = 1/5, Dorsiflexion = 0/5, Plantarflexion = 1/5</button>
        </div>
    )
}

export default PatientMmt;