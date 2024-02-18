import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useState, useEffect } from 'react';

const QuestionsPage = () => {
    const [openFood, setOpenFood] = useState(false);
    const [unsavedLocation, setUnsavedLocation] = useState("");
    const [userLocation, setUserLocation] = useState("");  
    const [address, setAddress] = useState("");
    const [image_url, setImage_url] = useState("");

    const [name, setName] = useState("");
    const [unsavedName, setUnsavedName] = useState("");
    const [userName, setUserName] = useState("");
    const [category, setCategory] = useState("");
    const [categoryPreferences, setCategoryPreferences] = useState("");
    const [recommendation, setRecommendation] = useState("");
    const [questionNumber, setQuestionNumber] = useState(1);
    const [openFitness, setOpenFitness] = useState(false); 

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
        <div className="pt-5">
            {/* question 1 */}
            {questionNumber === 1 ? 
            <>
            <Row style={{textAlign: "center"}}>
                <Col className="pink-bar"> 
                    <div className="circle-border">
                        1
                    </div>
                    <p className="questionStatusName">Name</p>
                </Col>
                <Col className="pink-bar">
                    <div className="circle">
                        2
                    </div>
                    <p className="questionStatusName">Category</p>
                </Col>
                <Col className="pink-bar">
                    <div className="circle">
                        3
                    </div>
                    <p className="questionStatusName">Category Preferences</p>
                </Col>
                <Col className="pink-bar">
                    <div className="circle">
                        4
                    </div>
                    <p className="questionStatusName">Recommendation</p>
                </Col>
            </Row>
            <div id="questions" className="text-center" style={{height: "100vh"}}>
                <h3 className="mt-5">Hello! What is your name?</h3>
                <Row>
                    <Col md="10" style={{ paddingRight: "0" }}>
                        <Form.Control size="lg"
                            placeholder="Enter your name"
                            onChange={(e) => { setUnsavedName(e.target.value) }}
                        />
                    </Col>
                    <Col md="2" style={{ paddingLeft: "0" }}>
                        <Button size="lg" variant="success" style={{backgroundColor: "#2f5d51", color: "white"}} type="submit" onClick={() => { setUserName(unsavedName); setQuestionNumber(2) }}>Submit</Button>
                    </Col>
                </Row>
            </div>
            </>
            : <></> 
            }

            {/* question 2 */}
            {questionNumber === 2 ? 
            <>
            <Row style={{textAlign: "center"}}>
                <Col className="pink-bar"> 
                    <div className="circle-green">
                        1
                    </div>
                    <p className="questionStatusName">Name</p>
                </Col>
                <Col className="pink-bar">
                    <div className="circle-border">
                        2
                    </div>
                    <p className="questionStatusName">Category</p>
                </Col>
                <Col className="pink-bar">
                    <div className="circle">
                        3
                    </div>
                    <p className="questionStatusName">Category Preferences</p>
                </Col>
                <Col className="pink-bar">
                    <div className="circle">
                        4
                    </div>
                    <p className="questionStatusName">Recommendation</p>
                </Col>
            </Row>
            <div id="questions" className="text-center" style={{height: "100vh"}}>
                <h3>What category do you want to try something new in?</h3>
                <Row style={{textAlign: "center"}}>
                <Col>
                    <Button variant="success" size="lg" className="mt-5" style={{backgroundColor: "#2f5d51", color: "white"}} onClick={() => {setOpenFood(!openFood);}}>Food</Button>
                </Col>

                <Col>
                <Button variant="success" size="lg" className="mt-5" style={{backgroundColor: "#2f5d51", color: "white"}} onClick={() => {setOpenFitness(!openFitness); setQuestionNumber(3)}}>Fitness</Button>
                </Col>
                </Row>
                {openFood ? 
                    <div className="container">
                        <Form className="mt-5" onSubmit={(e) => { e.preventDefault(); }}>
                            <Row>
                                <Col md="10" style={{ paddingRight: "0" }}>
                                    <Form.Control size="lg"
                                        placeholder="Enter your location..."
                                        onChange={(e) => { setUnsavedLocation(e.target.value) }}
                                    />
                                </Col>
                                <Col md="2" style={{ paddingLeft: "0" }}>
                                    <Button size="lg" variant="success" style={{backgroundColor: "#2f5d51", color: "white"}} type="submit" onClick={() => { setUserLocation(unsavedLocation); setQuestionNumber(3) }}>Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    : <></>}
            </div>
            </>
            : <></> 
            }

             {/* question 3 */}
             {questionNumber === 3 ? 
                <>
                <Row style={{textAlign: "center"}}>
                    <Col className="pink-bar"> 
                        <div className="circle-green">
                            1
                        </div>
                        <p className="questionStatusName">Name</p>
                    </Col>
                    <Col className="pink-bar">
                        <div className="circle-green">
                            2
                        </div>
                        <p className="questionStatusName">Category</p>
                    </Col>
                    <Col className="pink-bar">
                        <div className="circle-border">
                            3
                        </div>
                        <p className="questionStatusName">Category Preferences</p>
                    </Col>
                    <Col className="pink-bar">
                        <div className="circle">
                            4
                        </div>
                        <p className="questionStatusName">Recommendation</p>
                    </Col>
                </Row>

                <div id="questions" className="text-center" style={{height: "100vh"}}>
                    <Row style={{textAlign: "center"}}>
                    <h3 className="mb-3">
                        <span style={{backgroundColor: "#2F5D51", borderRadius: "500px", color: "white"}} className="p-3">Cost</span>
                    </h3>
                    <Col>
                        <Button variant="success" size="lg" className="mt-5" style={{backgroundColor: "#2f5d51", color: "white"}} onClick={() => {setQuestionNumber(4)}}>OK</Button>
                    </Col>

                    </Row>
                </div>
                </>
                : <></> 
            }

            {/* question 4 */}
            {questionNumber === 4 && openFood == true ? 
                <>
                    <Row style={{textAlign: "center"}}>
                        <Col className="pink-bar"> 
                            <div className="circle-green">
                                1
                            </div>
                            <p className="questionStatusName">Name</p>
                        </Col>
                        <Col className="pink-bar">
                            <div className="circle-green">
                                2
                            </div>
                            <p className="questionStatusName">Category</p>
                        </Col>
                        <Col className="pink-bar">
                            <div className="circle-green">
                                3
                            </div>
                            <p className="questionStatusName">Category Preferences</p>
                        </Col>
                        <Col className="pink-bar">
                            <div className="circle-border">
                                4
                            </div>
                            <p className="questionStatusName">Recommendation</p>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                    
                        <Col md={8}>
                            <h4>{userName}, we recommend you check out...</h4>
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
                    <Row>
                        <Col style={{textAlign: "right"}}>
                            <Button variant="success" size="lg" className="mt-5" style={{backgroundColor: "#2f5d51", color: "white"}} onClick={() => {setQuestionNumber(1); setOpenFood(false)}}>Restart</Button>
                        </Col>
                    </Row>
                </>
                : <></> 
            }

        </div>
    )
}

export default QuestionsPage;