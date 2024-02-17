import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import './QuestionStatus.css';

const QuestionStatus = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [categoryPreferences, setCategoryPreferences] = useState("");
    const [recommendation, setRecommendation] = useState("");

    return (
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
        </>
    )
}

export default QuestionStatus;