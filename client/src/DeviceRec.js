import React, {useState, useEffect} from "react";

function DeviceRec ({currentDevice}) {

    const [showCurrentDevice, setShowCurrentDevice] = useState([]);

    useEffect(() => {
        fetch(`/devices/${id}`)
          .then((r) => r.json())
          .then(data => setShowCurrentDevice(data));
      }, []);

      console.log(showCurrentDevice)

    const newDevObj = Object.assign({}, ...currentDevice);

    const {id} = newDevObj

    

      const {ankle_angle, sva, brace, footwear} = showCurrentDevice;
      //, patient:{name, goal, mmt}

    
    return (
        <div className= "deviceRec">
            <h7><b>Patient:</b></h7>
                <ul>
                    <p><b>Name:</b> {}</p>
                    <p><b>Goal:</b> {}</p>
                    <p><b>MMT:</b> {}</p>
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

