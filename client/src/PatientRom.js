import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function PatientRom () {

    const navigate = useNavigate();
    
    return (
        <div className= "patientGoals">
            <h3>Select Patient ROM Combination</h3>
                <button className = "presentationButton">Knee Flexion= 0 Degrees, R1= 10 Degrees PF, R2= 3 Degrees PF</button>
                <button className = "presentationButton">Knee Flexion= 5 Degrees, R1= 15 Degrees PF, R2= 5 Degrees PF</button>
                <button className = "presentationButton">Knee Flexion= 0 Degrees, R1= 5 Degrees PF, R2= 0 Degrees PF</button>
        </div>
    )
}

export default PatientRom;