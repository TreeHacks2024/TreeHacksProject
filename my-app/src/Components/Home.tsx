import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <>
            <h1 className="mt-5" style={{textAlign: "center"}}>What do you want to try?</h1>
            <Row style={{textAlign: "center"}}>
                <Col>
                    <Button variant="primary" size="lg" className="mt-5">Food</Button>
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