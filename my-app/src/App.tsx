import './App.css';
import Home from "./Components/Home";
import Rec from "./Components/Users/Recreation";
import Footer from "./Components/Footer";
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div style={{backgroundColor: "#F9EEE5"}}>

      <Container>
        <Home />
        <Rec />
      </Container>
      
      <Footer />
    </div>
  );
}

export default App;
