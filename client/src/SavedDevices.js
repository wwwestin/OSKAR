import React, {useState, useEffect} from "react";
import PatientContainer from "./PatientContainer";

function SavedDevices ({user}) {

    const [userSavedDevices, setUserSavedDevices]=useState([]);
    const [deviceDetails, setDeviceDetails]=useState([]);

    useEffect(() => {
        fetch("me/patients")
          .then((r) => {return r.json()})
          .then(data => {setUserSavedDevices(data.patients)})
      }, []);

      const patIds = userSavedDevices.map((obj) => obj.id);
      
      useEffect(() => {
        fetch("/devices/")
          .then((r) => {return r.json()})
          .then(data => {setDeviceDetails(data)})
        }, []);

      const patArray = deviceDetails.filter(g => patIds.some(f => g.patient.id === f));

      return (
        <div>
            {user ? (
              <div>
              <PatientContainer patArray= {patArray} />
              </div>
            ) : (
              <div className="message">
                <p>Please Login to View this Information!</p>
              </div>
            )}
        </div>
    )
}

export default SavedDevices;