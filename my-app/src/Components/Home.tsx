import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import LandingPage from './LandingPage/LandingPage';
import QuestionsPage from './QuestionsPage/QuestionsPage';
import './QuestionStatus/QuestionStatus.css';

import { useState, useEffect } from 'react';
import QuestionStatus from './QuestionStatus/QuestionStatus';

const Home = () => {
    const [openFood, setOpenFood] = useState(false);
    const [unsavedLocation, setUnsavedLocation] = useState("");
    const [userLocation, setUserLocation] = useState("");  
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [image_url, setImage_url] = useState("");
    const [category, setCategory] = useState("");
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('http://localhost:5000/api/yelp', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ location: userLocation }),
              });
              const data = await response.json();
              const randomNumber = Math.floor(Math.random() * 19) + 1; console.log(randomNumber);
              console.log(data.businesses[randomNumber]);
              console.log(data.businesses[randomNumber].name);
              console.log(data.businesses[randomNumber]);
              setName(data.businesses[randomNumber].name);
              setAddress(data.businesses[randomNumber].location.address1 + ", " + data.businesses[randomNumber].location.city + ", " + data.businesses[randomNumber].location.state + " " + data.businesses[randomNumber].location.zip_code);
              setImage_url(data.businesses[randomNumber].image_url);
            } catch (error) {
              console.error('Error:', error);
            }
          };
        
        fetchData();
    }, [userLocation]);

    return (
        <>
            {page === 1 ?  
            <LandingPage page={page} setPage={setPage} /> :
            <></>}
            {page === 2 ?  
            <QuestionsPage /> :
            <></>}

            <Row style={{textAlign: "center",}}>
                <Col>
                    <Button  variant="success" style={{backgroundColor: "#2f5d51", color: "white"}} size="lg" className="mt-5">Recreation</Button>
                </Col>
            </Row>

        </>
    )
}

export default Home;