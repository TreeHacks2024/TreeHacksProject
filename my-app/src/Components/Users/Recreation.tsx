import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from 'react';
import { processUserInputs } from './backendAlgorithm';

const Users = () => {
    const [userInputs, setUserInputs] = useState({
        activities: ""
    });
    const [results, setResults] = useState<string>("hi");


    useEffect(() =>  {
        console.log(userInputs.activities);
    }, [userInputs]); // runs anytime userInputs is modified

    useEffect(() =>  {
        console.log(results);
    }, [results]); // runs anytime results is modified

    const handleInputChange = (e: string, inputName: string) => {
        setUserInputs({
            ...userInputs,
            [inputName]: e
        });
    };

    useEffect (() => {
        const resultString = processUserInputs(userInputs);
        setResults(resultString);
    }, [userInputs] );

    return (
        <div>
            <InputGroup className="mb-3">
            <InputGroup.Text>Activities</InputGroup.Text>
            <Form.Control 
                aria-label="Activities" 
                value={userInputs.activities} 
                onChange={(e) => handleInputChange(e.target.value, "activities")}
            />
            </InputGroup>
            <h1 className="mt-5" style={{textAlign: "center"}}>{results}</h1>
        </div>
    );
}

export default Users;
