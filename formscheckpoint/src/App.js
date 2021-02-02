import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  FormLabel,
  FormCheck,
  FormControl,
  FormGroup,
  FormText,
  Navbar,
  NavbarBrand,
  Nav,
  NavDropdown,
  NavLink,
  Carousel,
  CarouselItem,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Wissenschaft</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <NavDropdown title="Activities" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Events</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Offers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className="formm">
        <Form id="half">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://srv.deutschlandradio.de/media/thumbs/e/e3fb46dce8f6ee38556e72c3fa017662v1_max_635x357_b3535db83dc50e27c1bb1392364c95a2.jpg?key=c5e7eb"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Novels</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8oDplZShqHWaO4LO3MvYGlY-V-9UajYtQQ&usqp=CAU"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Dictionaries</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKLzAMOL6RDMFV4T9MjNFVIsu2XELQAJLTdQ&usqp=CAU"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Magazine</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
