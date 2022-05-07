import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from 'react-bootstrap';
import "./App.css"

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
          body: JSON.stringify({sva: "5-7", brace: "Articulated AFO", footwear: "Plain Heel with Flexible Sole and Rounded or Flat Toe"}),
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
          body: JSON.stringify({sva: "14-15", brace: "Solid AFO with Free MTPJ", footwear: "Plain Heel with Flexible Sole and Rounded or Flat Toe"}),
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
          body: JSON.stringify({sva: "14-15", brace: "Solid AFO with Free MTPJ", footwear: "Plain Heel with Flexible Sole and Rounded or Flat Toe"}),
       })
      }

      function handleSubmit4(event){
        event.preventDefault()
        navigate('DeviceRec')
        fetch(`/devices/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({sva: "10-12", brace: "Solid AFO with Free MTPJ", footwear: "Plain Heel with Flexible Sole and Rounded or Flat Toe"}),
       })
      }

      function handleSubmit5(event){
        event.preventDefault()
        navigate('DeviceRec')
        fetch(`/devices/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({sva: "10-12", brace: "Solid AFO with Fixed MTPJ", footwear: "Positive Heel with Optimised Position Rocker Sole"}),
       })
      }

      function handleSubmit6(event){
        event.preventDefault()
        navigate('DeviceRec')
        fetch(`/devices/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({sva: "10-12", brace: "Solid AFO with Fixed MTPJ", footwear: "Negative Heel with Optimised Position Rocker Sole"}),
       })
      }

      function handleSubmit7(event){
        event.preventDefault()
        navigate('DeviceRec')
        fetch(`/devices/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({sva: "10-12", brace: "Solid AFO with Free MTPJ", footwear: "Negative Heel with Optimised Position Rocker Sole"}),
       })
      }

      function handleSubmit8(event){
        event.preventDefault()
        navigate('DeviceRec')
        fetch(`/devices/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({sva: "10-12", brace: "Solid AFO with Fixed MTPJ", footwear: "Negative Heel with Optimised Position Point Loading Rocker Sole"}),
       })
      }

      function handleSubmit9(event){
        event.preventDefault()
        navigate('DeviceRec')
        fetch(`/devices/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({sva: "15-19", brace: "Solid AFO with Fixed MTPJ", footwear: "Negative Heel with Optimised Position Point Loading Rocker Sole"}),
       })
      }

      function handleSubmit10(event){
        event.preventDefault()
        navigate('DeviceRec')
        fetch(`/devices/${id}`, {
          method: "PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({sva: "15-19", brace: "Solid AFO with Fixed MTPJ", footwear: "Positive Heel with Optimised Postion Point Loading Rocker Sole"}),
       })
      }
    
    return (
        <div className="patientGait">
            <h6>Select a Patient Gait Deviation Combination</h6>
                <Button className = "presentationButton" onClick = {handleSubmit1} type= "submit"><ul><li>Sufficient Shank Incline</li><li>Shank Kinematics in Stance Typical</li><li>Angular Velocity of Shank During Entry to Midstance Adequate</li><li>Exit from Midstance is Optimal</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit2} type= "submit"><ul><li>Insufficient Shank Incline WITH Shank Reversal</li><li>Shank Kinematics in Stance Phase Not Typical</li><li>Able to Control Shank Kinematics in Terminal Stance Once Ankle is Fixed</li><li>Angular Velocity of Shank During Entry to Midstance is Optimal</li><li>Flexible Sole with Rounded Toe Produces Optimal Exit from Midstance</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit3} type= "submit"><ul><li>Insufficient Shank Incline WITH Shank Reversal</li><li>Shank Kinematics in Stance Phase Not Typical</li><li>Able to Control Shank Kinematics in Terminal Stance Once Ankle is Fixed</li><li>Angular Velocity of Shank During Entry to Midstance is Optimal</li><li>Stiff Sole with Optimized Position Point Loading Rocker Produces Optimal Exit from Midstance</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit4} type= "submit"><ul><li>Insufficient Shank Incline WITHOUT Shank Reversal</li><li>Shank Kinematics in Stance Phase Not Typical</li><li>Able to Control Shank Kinematics in Terminal Stance Once Ankle is Fixed</li><li>Angular Velocity of Shank During Entry to Midstance is Optimal</li><li>Stiff Sole with Optimized Position Rocker Sole Produces Optimal Exit from Midstance</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit5} type= "submit"><ul><li>Insufficient Shank Incline WITHOUT Shank Reversal</li><li>Shank Kinematics in Stance Phase Not Typical</li><li>Not Able to Control Shank Kinematics in Terminal Stance Once Ankle is Fixed</li><li>Angular Velocity of Shank During Entry to Midstance Needs to be Increased</li><li>Stiff Sole with Optimized Position Point Loading Rocker Produces Optimal Exit from Midstance</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit6} type= "submit"><ul><li>Excessive Shank Incline WITHOUT Hip and Knee Stiffness</li><li>Shank Kinematics in Stance Phase Not Typical</li><li>Not Able to Control Shank Kinematics in Terminal Stance Once Ankle is Fixed</li><li>Angular Velocity of Shank During Entry to Midstance Needs to be Reduced</li><li>Stiff Sole with Optimized Position Rocker Sole Produces Optimal Exit from Midstance</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit7} type= "submit"><ul><li>Excessive Shank Incline WITHOUT Hip and Knee Stiffness</li><li>Shank Kinematics in Stance Phase Not Typical</li><li>Able to Control Shank Kinematics in Terminal Stance Once Ankle is Fixed</li><li>Angular Velocity of Shank During Entry to Midstance Needs to be Reduced</li><li>Stiff Sole with Optimized Position Rocker Sole Produces Optimal Exit from Midstance</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit8} type= "submit"><ul><li>Excessive Shank Incline WITHOUT Hip and Knee Stiffness</li><li>Shank Kinematics in Stance Phase Not Typical</li><li>Not Able to Control Shank Kinematics in Terminal Stance Once Ankle is Fixed</li><li>Angular Velocity of Shank During Entry to Midstance Needs to be Reduced</li><li>Stiff Sole with Optimized Position Point Loading Rocker Produces Optimal Exit from Midstance</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit9} type= "submit"><ul><li>Excessive Shank Incline WITH Hip and Knee Stiffness</li><li>Shank Kinematics in Stance Phase Not Typical</li><li>Not Able to Control Shank Kinematics in Terminal Stance Once Ankle is Fixed</li><li>Angular Velocity of Shank During Entry to Midstance Needs to be Reduced</li><li>Stiff Sole with Optimized Position Point Loading Rocker Produces Optimal Exit from Midstance</li></ul></Button>
                <Button className = "presentationButton" onClick = {handleSubmit10} type= "submit"><ul><li>Excessive Shank Incline WITH Hip and Knee Stiffness</li><li>Shank Kinematics in Stance Phase Not Typical</li><li>Not Able to Control Shank Kinematics in Terminal Stance Once Ankle is Fixed</li><li>Angular Velocity of Shank During Entry to Midstance Needs to be Increased</li><li>Stiff Sole with Optimized Position Point Loading Rocker Produces Optimal Exit from Midstance</li></ul></Button>
        </div>
    )
}

export default PatientGait;