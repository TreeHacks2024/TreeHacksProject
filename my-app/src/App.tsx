import './App.css';
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <NavBar />

      <Container>
        <Home />
      </Container>
      
      <Footer />
    </>
  );
}

export default App;
