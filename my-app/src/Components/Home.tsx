import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import { useState, useEffect } from 'react';

const Home = () => {
    const [openFood, setOpenFood] = useState(false);
    const [userLocation, setUserLocation] = useState("");  
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/yelp');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        };
    
        fetchData();
    }, [userLocation]);

    return (
        <>
            <h1 className="mt-5" style={{textAlign: "center"}}>What do you want to try?</h1>
            <Row style={{textAlign: "center"}}>
                <Col>
                    <Button variant="primary" size="lg" className="mt-5" onClick={() => setOpenFood(!openFood)}>Food</Button>
                    {openFood ? 
                    <>
                        <Form className="mt-3">
                            <Row>
                                <Col md="8" style={{paddingRight: "0"}}>
                                    <Form.Control type="email" placeholder="Enter your location..." onChange={(e) => {setUserLocation(e.target.value)}} />
                                </Col>
                                <Col md="4" style={{paddingLeft: "0"}} >
                                    <Button onClick={() => {console.log(userLocation)}}>Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </>
                    : <></>}
                </Col>
                <Col>
                    <Button variant="primary" size="lg" className="mt-5">Recreation</Button>
                </Col>
                <Col>
                    <Button variant="primary" size="lg" className="mt-5">Shopping</Button>
                </Col>
            </Row>
        </>
    )
}

export default Home;