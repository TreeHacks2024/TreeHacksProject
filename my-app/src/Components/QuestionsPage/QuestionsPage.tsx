import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const QuestionsPage = () => {
    const [name, setName] = useState("");
    const [unsavedName, setUnsavedName] = useState("");
    const [category, setCategory] = useState("");
    const [categoryPreferences, setCategoryPreferences] = useState("");
    const [recommendation, setRecommendation] = useState("");
    const [questionNumber, setQuestionNumber] = useState(1);
    const [openFood, setOpenFood] = useState(false);
    const [openFitness, setOpenFitness] = useState(false); 
    return (
        <>
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
                <h3>Hello! What is your name?</h3>
                <Row>
                    <Col md="10" style={{ paddingRight: "0" }}>
                        <Form.Control size="lg"
                            placeholder="Enter your location..."
                            onChange={(e) => { setUnsavedName(e.target.value) }}
                        />
                    </Col>
                    <Col md="2" style={{ paddingLeft: "0" }}>
                        <Button size="lg" variant="success" style={{backgroundColor: "#2f5d51", color: "white"}} type="submit" onClick={() => { setName(unsavedName); setQuestionNumber(2) }}>Submit</Button>
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
                    <Button variant="success" size="lg" className="mt-5" style={{backgroundColor: "#2f5d51", color: "white"}} onClick={() => {setOpenFood(!openFood); setQuestionNumber(3)}}>Food</Button>
                </Col>

                <Col>
                <Button variant="success" size="lg" className="mt-5" style={{backgroundColor: "#2f5d51", color: "white"}} onClick={() => {setOpenFitness(!openFitness); setQuestionNumber(3)}}>Fitness</Button>
                </Col>
                </Row>
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
                        <Button variant="success" size="lg" className="mt-5" style={{backgroundColor: "#2f5d51", color: "white"}} onClick={() => {setOpenFood(!openFood); setQuestionNumber(4)}}>Food</Button>
                    </Col>

                    <Col>
                        <Button variant="success" size="lg" className="mt-5" style={{backgroundColor: "#2f5d51", color: "white"}} onClick={() => {setOpenFitness(!openFitness); setQuestionNumber(4)}}>Fitness</Button>
                    </Col>
                    </Row>
                </div>
                </>
                : <></> 
            }

            {/* question 4 */}
            {questionNumber === 4 ? 
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
                </>
                : <></> 
            }

        </>
    )
}

export default QuestionsPage;