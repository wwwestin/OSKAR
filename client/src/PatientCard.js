import React from "react";

function PatientCard ({p}) {

    const {ankle_angle, sva, brace, footwear, patient: {name, goal, mmt}} = p;
    //, patient: {name, goal, mmt}
    //console.log(patArray)

    return (
        <div className="patientCard">
            <div className="patientAttributes">
                <ul>
                    <p><b>Name:</b> {name}</p>
                    <p><b>Goal:</b> {goal}</p>
                    <p><b>MMT:</b> {mmt}</p>
                </ul>
            </div>
            <div className="deviceConfig">
                <ul>
                    <p><b>Brace:</b> {brace}</p>
                    <p><b>Ankle Angle:</b> {ankle_angle} Degrees Plantarflexed</p>
                    <p><b>Shank to Vertical Angle (SVA):</b> {sva} Degrees Inclined</p>
                    <p><b>Footwear Configuration:</b> {footwear}</p>
                </ul>
            </div>


        </div>
    )
}

export default PatientCard;