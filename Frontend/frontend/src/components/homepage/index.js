import React from "react";
import "./styles.css";
import { Facebook, Github, Youtube } from "react-bootstrap-icons";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Carousel,
  Container,
  Row,
  Col,
  Card,
  Image,
} from "react-bootstrap";

// import reducers here

const Homepage = () => {
  return (
    <React.Fragment>
      <div>
        <Navbar bg="primary" variant="dark">
          {" "}
          <Navbar.Brand href="#home">Jaisalmer E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Account</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Electronics
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Grocery</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Home Accessories
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Fashion</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.5">Other's</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search for products"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <div style={{ marginTop: "0.5rem" }} className="carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="carousel"
                src="https://source.unsplash.com/random"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Promotions</h3>
                <p>view is giving but 1 get 1 free</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel"
                src="https://source.unsplash.com/random"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Discounts</h3>
                <p>Get 50% when bill is more than 1000</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel"
                src="https://source.unsplash.com/random"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Offer's</h3>
                <p>buy two shirts and get one free</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div
            style={{
              marginLeft: "10rem",
              marginTop: "3.5rem",
            }}
          >
            <h2>Featured</h2>
          </div>
        </div>
        <div style={{ marginTop: "10rem" }}></div>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Image
                  style={{ height: "20rem" }}
                  variant="top"
                  src="https://source.unsplash.com/random"
                />
                <Card.Body>
                  <Card.Title>Product Title</Card.Title>
                  <Card.Text>Product Description</Card.Text>
                  <Button variant="primary">Know More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Image
                  style={{ height: "20rem" }}
                  variant="top"
                  src="https://source.unsplash.com/random"
                />
                <Card.Body>
                  <Card.Title>Product Title</Card.Title>
                  <Card.Text>Product Description</Card.Text>
                  <Button variant="primary">Know More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Image
                  style={{ height: "20rem" }}
                  variant="top"
                  src="https://source.unsplash.com/random"
                />
                <Card.Body>
                  <Card.Title>Product Title</Card.Title>
                  <Card.Text>Product Description</Card.Text>
                  <Button variant="primary">Know More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="categories">
          <h2
            style={{
              textAlign: "left",
              marginLeft: "10rem",
              marginTop: "4.5rem",
            }}
          >
            SHOP BY CATEGORY
          </h2>
          <Container>
            <Row style={{ display: "flex" }}>
              <Col style={{ flex: "0.5" }}>
                <Image
                  style={{
                    height: "20rem",
                    maxWidth: "100%",
                    width: "100%",
                    marginTop: "5rem",
                  }}
                  variant="top"
                  src="https://source.unsplash.com/random"
                />
                <Button variant="ACCESSORIES">ACCESSORIES -> </Button>
              </Col>
              <Col style={{ flex: "0.5" }}>
                <Image
                  style={{
                    height: "20rem",
                    maxWidth: "100%",
                    width: "100%",
                    marginTop: "5rem",
                  }}
                  variant="top"
                  src="https://source.unsplash.com/random"
                />
                <Button variant="GROCERIES">GROCERIES -> </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image
                  style={{
                    height: "20rem",
                    maxWidth: "100%",
                    width: "100%",
                    marginTop: "3rem",
                  }}
                  variant="top"
                  src="https://source.unsplash.com/random"
                />
                <Button variant="APPAREL">APPAREL -> </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="divider"></div>
        <div
          style={{
            marginTop: "2rem",
            justifyContent: "center",
            textAlign: "center",
          }}
          className="social-links"
        >
          <Container>
            <Facebook style={{ fontSize: "40px", marginRight: "10px" }} />

            <Github style={{ fontSize: "40px", marginRight: "10px" }} />
            <Youtube style={{ fontSize: "40px" }} />
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Homepage;

// const mapStateToProps = (state) => {
//   return {
//     // map state to props here for reducers
//   };
// };

// export default connect(mapStateToProps, {
//   // add reducers here
// })(Homepage);
