import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from 'react';
import { string } from 'yargs';
import { processUserInputs } from './backendAlgorithm';

const Users = () => {
    const [userInputs, setUserInputs] = useState({
        activity1: "",
        activity2: ""
    });
    const [results, setResults] = useState<string>("");


    useEffect(() =>  {
        console.log(userInputs.activity1);
        console.log(userInputs.activity2);
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
            <InputGroup.Text>Two Activities</InputGroup.Text>
            <Form.Control 
                aria-label="Activity 1" 
                value={userInputs.activity1} 
                onChange={(e) => handleInputChange(e.target.value, "activity1")}
            />
            <Form.Control 
                aria-label="Activity 2" 
                value={userInputs.activity2} 
                onChange={(e) => handleInputChange(e.target.value, "activity2")}
            />
            </InputGroup>
            {/* <h1 className="mt-5" style={{textAlign: "center"}}>{results}</h1> */}
        </div>
    );
}

export default Users;
