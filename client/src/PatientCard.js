import React from "react";
import { Card } from "react-bootstrap";

function PatientCard ({p}) {

    const {ankle_angle, sva, brace, footwear, patient: {name, goal, mmt}} = p;
    //, patient: {name, goal, mmt}
    //console.log(patArray)

    return (
        <div className="patientCard">
            <Card style={{width:'30rem'}}>
                <Card.Body>
                    <Card.Title>
                        <ul>
                            <p><b>Name:</b> {name}</p>
                            <p><b>Goal:</b> {goal}</p>
                            <p><b>MMT:</b> {mmt}</p>
                        </ul>
                    </Card.Title>
                    <Card.Subtitle>
                        <ul>
                            <p><b>Brace:</b> {brace}</p>
                            <p><b>Ankle Angle:</b> {ankle_angle} Degrees Plantarflexed</p>
                            <p><b>Shank to Vertical Angle (SVA):</b> {sva} Degrees Inclined</p>
                            <p><b>Footwear Configuration:</b> {footwear}</p>
                        </ul>
                        </Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PatientCard;