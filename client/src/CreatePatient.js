import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Row, Col} from 'react-bootstrap';
import "./App.css"

function CreatePatient ({handleAddPatient}) {

    const navigate = useNavigate();

    const [newPatient, setNewPatient] = useState([]);
    
    function onChange(event) {
        setNewPatient({...newPatient, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        navigate('PatientGoals')
        fetch("/patients", {
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newPatient),
       })
       .then((r) => r.json())
       .then(handleAddPatient)
    }

    return (
        <Row>
            <Col>
                <div>
                    <div className = "addPatient">
                        <h2>Add a Patient (De-Identified)</h2>
                            <p className= "addPatientText">Enter as Number</p>
                            <form onSubmit={handleSubmit}>
                                <input 
                                    className="addPatientForm" 
                                    type="integer"
                                    name="name"  
                                    onChange={onChange} 
                                />
                                <Row style={{display: 'flex', justifyContent:'center'}}>
                                    <Button className="submitButtonDisplay" type="submit" >Submit</Button>
                                    </Row>
                            </form>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default CreatePatient;

