import React, {useState, useEffect} from "react";
//import {Link} from "react-router-dom";

function CreatePatient ({user}) {
    
    const [patient, setPatient] = useState([]);
    const [newPatient, setNewPatient] = useState([]);

    function onChange(event) {
        setNewPatient({...newPatient, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        fetch("/patients", {
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newPatient),
       }).then(response => response.json())
       .then(json => {
           fetch("/me/patients")
           .then(resp => resp.json())
           .then(data => setPatient(data.patients))
           });
      }

    useEffect(() => {
        fetch("/me/patients").then((response) => {
          if (response.ok) {
            response.json().then((data) => setPatient(data.patients));
          }
        });
      }, []);

    return (
        <div>
            <div className = "addPatient">
                <h2>Add a Patient</h2>
                    <form onSubmit={handleSubmit}>
                        <input 
                            className="addPatientForm" 
                            type="integer"
                            name="name" 
                            placeholder= "Add Patient as Number" 
                            onChange={onChange} 
                        />
                        <button className="submitButtonDisplay" type="submit">Submit</button>
                    </form>
                </div>
        </div>
    )
}

export default CreatePatient;