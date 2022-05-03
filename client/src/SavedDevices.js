import React, {useState, useEffect} from "react";

function SavedDevices () {

    const [userSavedDevices, setUserSavedDevices]=useState([]);
    const [deviceDetails, setDeviceDetails]=useState([]);

    // function updatedState(add){
    //     setUserSavedDevices([...userSavedDevices, add])   
    //   }

    useEffect(() => {
        fetch("me/patients")
          .then((r) => {return r.json()})
          .then(data => {setUserSavedDevices(data.patients)})
      }, []);
      //console.log(userSavedDevices)
      const patIds = userSavedDevices.map((obj) => obj.id)
      //console.log(patIds)
      console.log(patIds)

      useEffect(() => {
        fetch("/devices/")
          .then((r) => {return r.json()})
          .then(data => {setDeviceDetails(data)})
      }, []);

    // array of patient IDS
    // iterate through the arr to access outer object
    // if innerObject's id is in the id array, then return the outer object
    for (let device of deviceDetails){
        if (device.patient.id in patIds){
            console.log(device)
        }
    }
      
    //   const patsToDisplay = deviceDetails.patient.map((p) => patIds ===p.id)
    //   console.log(patsToDisplay)


      
    return (
        <div>

        </div>
    )
}

export default SavedDevices;