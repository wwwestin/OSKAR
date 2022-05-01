import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function PatientMmt ({currentDevice}) {

    const newObj = Object.assign({}, ...currentDevice);
    
    const {id} = newObj;

    const navigate = useNavigate();

    function handleSubmit1(event){
        event.preventDefault()
        navigate('PatientRom')
        fetch(`/devices/${id}`, {
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
        fetch(`/devices/${id}`, {
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
        fetch(`/devices/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({goal: "Standing"}),
       })
      }

    return (
        <div>

        </div>
    )
}

export default PatientMmt;