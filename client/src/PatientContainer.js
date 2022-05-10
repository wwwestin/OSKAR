import React from "react";
import PatientCard from "./PatientCard";

function PatientContainer ({patArray}) {
    const patCard = patArray.map((p) => (
        <PatientCard
            key= {p.id}
            p= {p}
        />
    ));

    return (
        <div className="patientContainer">{patCard}</div>  
    )
}

export default PatientContainer;