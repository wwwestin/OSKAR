import React, {useState, useEffect} from "react";
import {Card} from 'react-bootstrap';
import "./App.css"

function DeviceRec ({currentPatient, currentDevice}) {

    const [showCurrentDevice, setShowCurrentDevice] = useState({});

    const {ankle_angle, sva, brace, footwear} = showCurrentDevice;
    
    const newPatObj = Object.assign({}, ...currentPatient);
    const newDevObj = Object.assign({}, ...currentDevice);

    const {name} = newPatObj;
    const {id} = newDevObj;
     
    useEffect(() => {
        fetch(`/devices/${id}`)
          .then((r) => r.json())
          .then(data => setShowCurrentDevice(data));
      }, [id]);
    
    return (
        <div className= "deviceCard">
            <Card bg='card' style={{width:'18rem'}}>
                <Card.Body>
                    <Card.Title><b>Name:</b> {name}</Card.Title>
                        <hr></hr>
                        <Card.Subtitle><b>Brace Configuration Recommendation:</b></Card.Subtitle>
                            <Card.Text>
                                <hr></hr>
                                    <ul>
                                        <p><b>Brace:</b> {brace}</p>
                                        <hr></hr>
                                        <p><b>Ankle Angle:</b> {ankle_angle} Degrees Plantarflexed</p>
                                        <hr></hr>
                                        <p><b>Shank to Vertical Angle (SVA):</b> {sva} Degrees Inclined</p>
                                        <hr></hr>
                                        <p><b>Footwear Configuration:</b> {footwear}</p>
                                    </ul>
                            </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DeviceRec;

