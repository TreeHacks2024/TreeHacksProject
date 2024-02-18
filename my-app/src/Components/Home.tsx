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

            <h1 className="pt-5" style={{textAlign: "center", color: "#2f5d51"}}>What category do you want to try something new in?</h1>
            <Row style={{textAlign: "center"}}>
                <Col>
                    <Button variant="success" size="lg" className="mt-5" style={{backgroundColor: "#2f5d51", color: "white"}} onClick={() => setOpenFood(!openFood)}>Food</Button>
                    {openFood ? 
                    <>
                        <Form className="mt-5" onSubmit={(e) => { e.preventDefault(); }}>
                            <Row>
                                <Col md="8" style={{ paddingRight: "0" }}>
                                    <Form.Control size="lg"
                                        placeholder="Enter your location..."
                                        onChange={(e) => { setUnsavedLocation(e.target.value) }}
                                    />
                                </Col>
                                <Col md="4" style={{ paddingLeft: "0" }}>
                                    <Button size="lg" variant="success" style={{backgroundColor: "#2f5d51", color: "white"}} type="submit" onClick={() => { setUserLocation(unsavedLocation) }}>Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </>
                    : <></>}
                </Col>
                <Col>
                    <Button  variant="success" style={{backgroundColor: "#2f5d51", color: "white"}} size="lg" className="mt-5">Recreation</Button>
                </Col>
            </Row>
            {name ? <>
            
            <Row className="mt-5">
                <Col md={8}>
                    <h3 className="mb-3">
                        <span style={{backgroundColor: "#2F5D51", borderRadius: "500px", color: "white"}} className="p-2">{name}</span>
                    </h3>
                    <h3 className="mt-5">
                        <span style={{backgroundColor: "#2F5D51", borderRadius: "500px", color: "white", minHeight: "20em"}} className="p-3">{address}</span>
                    </h3>
                </Col>
                <Col xs={2} md={4}>
                    <Image src={image_url} style={{ width: '18rem' }} alt="restaraunt img" rounded />
                </Col>
            </Row>
            </>
            : <></>}
        </>
    )
}

export default Home;