import React from "react";
import {useNavigate} from "react-router-dom";

function PatientGait ({currentDevice}) {

    const newObj = Object.assign({}, ...currentDevice);
    
    const {id} = newObj;

    const navigate = useNavigate();


    function handleSubmit1(event){
        event.preventDefault()
        navigate('DeviceRec')
        fetch(`/devices/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({sva: "10-12", brace: "Solid AFO with Fixed MTPJ", footwear: "Positive Heel with Flat/Rounded Toe"}),
       })
      }
    
      function handleSubmit2(event){
        event.preventDefault()
        navigate('DeviceRec')
        fetch(`/devices/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({sva: "10-12", brace: "Solid AFO with Free MTPJ", footwear: "Negative Heel with Stiff Sole & Optimised Position Point Loading Rocker"}),
       })
      }

      function handleSubmit3(event){
        event.preventDefault()
        navigate('DeviceRec')
        fetch(`/devices/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({sva: "14-15", brace: "Solid AFO with Fixed MTPJ", footwear: "Plain Heel with Stiff Sole & Optimised Position Rocker Sole"}),
       })
      }
    
    return (
        <div className="patientGait">
            <h6>Select a Patient Gait Deviation Combination</h6>
                <button className = "presentationButton" onClick = {handleSubmit1} type= "submit">Insufficient Shank Incline WITHOUT Shank Reversal, Shank Kinematics in Stance Phase Not Typical, Not Able to Control Shank Kinematics in Terminal Stance Once Ankle is Fixed, Angular Velocity of Shank During Entry to Midstance Needs to be Increased, Exit from Midstance is Optimal</button>
                <button className = "presentationButton" onClick = {handleSubmit2} type= "submit">Excessive Shank Incline with NO Hip and Knee Stiffness, Shank Kinematics in Stance Phase Not Typical, Able to Control Shank Kinematics in Terminal Stance Once Ankle is Fixed, Angular Velocity of Shank During Entry to Midstance Needs to be Reduced, Stiff Sole with Optimized Position Point Loading Rocker Produces Optimal Exit from Midstance</button>
                <button className = "presentationButton" onClick = {handleSubmit3} type= "submit">Insufficient Shank Incline WITH Shank Reversal, Shank Kinematics in Stance Phase Not Typical, Not Able to Control Shank Kinematics in Terminal Stance Once Ankle is Fixed, Angular Velocity of Shank During Entry to Midstance is Optimal, Stiff Sole with Optimized Position Rocker Sole Produces Optimal Exit from Midstance</button>
        </div>
    )
}

export default PatientGait;