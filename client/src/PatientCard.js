import React from "react";
import { Card } from "react-bootstrap";

function PatientCard ({p}) {

    const {ankle_angle, sva, brace, footwear, patient: {name, goal, mmt}} = p;
    //, patient: {name, goal, mmt}
    //console.log(patArray)

    return (
        <div className="patientCard">
            <Card bg='card' style={{width:'30rem' }}>
                <Card.Body>
                    <Card.Title>
                        <ul>
                            <p><b>Name:</b> {name}</p>
                            <hr></hr>
                            <p><b>Goal:</b> {goal}</p>
                            <hr></hr>
                            <p><b>MMT:</b> {mmt}</p>
                            <hr></hr>
                        </ul>
                    </Card.Title>
                    <Card.Subtitle>
                        <ul>
                            <p><b>Brace:</b> {brace}</p>
                            <hr></hr>
                            <p><b>Ankle Angle:</b> {ankle_angle} Degrees Plantarflexed</p>
                            <hr></hr>
                            <p><b>Shank to Vertical Angle (SVA):</b> {sva} Degrees Inclined</p>
                            <hr></hr>
                            <p><b>Footwear Configuration:</b> {footwear}</p>
                        </ul>
                        </Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PatientCard;