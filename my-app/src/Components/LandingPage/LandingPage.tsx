import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import sunImage from '../../public/sun.png'; // Replace './sun.png' with the actual path to your image file
import './sun.css';

const Home = () => {
    return (
        <div className="text-center" style={{height: "100vh"}}>
            <div className="sunContainer">
                <Image src={sunImage} style={{width: "30%"}} className="mt-5 sun" alt="Sun" />
            </div>
            
            <h1 style={{fontFamily: "Georgia Pro", "fontWeight": "bolder", fontSize: "92px", color: "#2f5d51"}} className="mt-3">Neophil</h1>
            <h3><span style={{borderTop: "1px solid green"}}>Fostering a new love for trying new things</span></h3>
            <Button variant="success" size="lg" className="mt-5 text-center" style={{backgroundColor: "#2f5d51", color: "white"}}>Get Started</Button>
        </div>
    )
}

export default Home;