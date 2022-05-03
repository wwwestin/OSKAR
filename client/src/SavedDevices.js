import React, {useState, useEffect} from "react";
import PatientContainer from "./PatientContainer";

function SavedDevices () {

    const [userSavedDevices, setUserSavedDevices]=useState([]);
    const [deviceDetails, setDeviceDetails]=useState([]);

    useEffect(() => {
        fetch("me/patients")
          .then((r) => {return r.json()})
          .then(data => {setUserSavedDevices(data.patients)})
      }, []);

      const patIds = userSavedDevices.map((obj) => obj.id);
      
      //console.log(patIds)

      useEffect(() => {
        fetch("/devices/")
          .then((r) => {return r.json()})
          .then(data => {setDeviceDetails(data)})
      }, []);

      const patArray = deviceDetails.filter(g => patIds.some(f => g.patient.id === f));

      //console.log(patArray)

    //   const deconMap = patArray.map(pat => {
    //       return (
    //           <PatientCard
    //           key= {pat.id}
    //           name= {pat.patient.name}
    //           goal= {pat.patient.goal}
    //           mmt= {pat.patient.mmt}
    //           ankle_angle= {pat.ankle_angle}
    //           sva= {pat.sva}
    //           brace= {pat.brace}
    //           footwear= {pat.footwear}
    //           />
    //       )
    //   })

      //console.log(deconMap)


      return (
        <div>
            <PatientContainer patArray= {patArray} />
        </div>
    )
}

export default SavedDevices;