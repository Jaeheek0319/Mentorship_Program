import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard_Navbar() {
  return (
    <>
      {/*}    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br /> */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">General</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">My Mentors</Nav.Link>
            <Nav.Link href="#features">My Requests</Nav.Link>
            <Nav.Link href="#pricing">Calender</Nav.Link>
            <Nav.Link href="#pricing">My Mentees</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
