import React, {useState, useEffect} from "react";

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
      }, {});
    
    return (
        <div className= "deviceRec">
            <h7><b>Patient:</b></h7>
                <ul>
                    <p><b>Name:</b> {name}</p>
                </ul>
            <h8><b>Brace Configuration Recommendation:</b></h8>
                <ul>
                    <p><b>Brace:</b> {brace}</p>
                    <p><b>Ankle Angle:</b> {ankle_angle} Degrees Plantarflexed</p>
                    <p><b>Shank to Vertical Angle (SVA):</b> {sva} Degrees Inclined</p>
                    <p><b>Footwear Configuration:</b> {footwear}</p>
                </ul>
        </div>
    )
}

export default DeviceRec;

