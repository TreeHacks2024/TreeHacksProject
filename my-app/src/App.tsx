import './App.css';
import Home from "./Components/Home";
import Rec from "./Components/Users/Recreation";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div style={{backgroundColor: "#F9EEE5", height: "100vh"}}>

      <Container>
        <Home />
        <Rec />
      </Container>
      
      <Footer />
    </div>
  );
}

export default App;
