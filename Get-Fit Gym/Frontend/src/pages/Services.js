import "../components/head.css";
import Header from "../components/header";
// import Card from "../components/card";
// import "../components/card.css";
import "./services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { GiMeditation} from "react-icons/gi";
import { GiRun} from "react-icons/gi";
import { TbYoga } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { LuPersonStanding } from "react-icons/lu";
import { IoIosHeartHalf } from "react-icons/io";

function Services() {
  return (

    <div>
          <div id="service-bg">
            
          <Header />
  <Container>
    
        <Row className="mt-5" >
          <Col>
        <h1 id="card-row-2">Our Services</h1>
          </Col>
     
     
        </Row>
  </Container>

      <Container>
        <Row className="mt-5" id="Card-row-3">
          <Col>
            <Card className="card">
              <Card.Title className="card-head">
              <span className="card-icon">
                <TbYoga/>
                </span>
              </Card.Title>
              <Card.Text className="card-txt-1">
                Yoga
              </Card.Text>
              <Card.Text className="card-txt-2">
                Price : ₹ 500
              </Card.Text>
              <Link to="/registration" className="nav-link">
              <Button className="card-btn">Register</Button>
              
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="card">
            <Card.Title className="card-head">
            <span className="card-icon">
           < GiMeditation/>
                </span>
              </Card.Title>
              <Card.Text className="card-txt-1">
                Meditation
              </Card.Text>
              <Card.Text className="card-txt-2">
                Price : ₹ 1000
              </Card.Text>
              <Link to="/registration" className="nav-link">
              <Button className="card-btn">Register</Button>
              
              </Link>
            </Card>

          </Col>
          <Col>
            <Card className="card">
            <Card.Title className="card-head">
            <span className="card-icon">
                <LuPersonStanding/>
                </span>
              </Card.Title>
              <Card.Text className="card-txt-1">
                Dance
              </Card.Text>
              <Card.Text className="card-txt-2">
                Price : ₹ 1500
              </Card.Text>
              <Link to="/registration" className="nav-link">
              <Button className="card-btn">Register</Button>
              
              </Link>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5" id="Card-row-3">
          <Col>
            <Card className="card">
              <Card.Title className="card-head">
              <span className="card-icon">
                <CgGym/>
                </span>
              </Card.Title>
              <Card.Text className="card-txt-1">
                Gym
              </Card.Text>
              <Card.Text className="card-txt-2">
                Price : ₹ 2000
              </Card.Text>
              <Link to="/registration" className="nav-link">
              <Button className="card-btn">Register</Button>
              
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="card">
            <Card.Title className="card-head">
            <span className="card-icon">
                <GiRun/>
                </span>
              </Card.Title>
              <Card.Text className="card-txt-1">
                Cardio
              </Card.Text>
              <Card.Text className="card-txt-2">
                Price : ₹ 2500
              </Card.Text>
              
              <Link to="/registration" className="nav-link">
              <Button className="card-btn">Register</Button>
              
              </Link>
            </Card>

          </Col>
          <Col>
            <Card className="card">
            <Card.Title className="card-head ">
            <span className="card-icon">
                <IoIosHeartHalf/>
                </span>
              </Card.Title>
              <Card.Text className="card-txt-1">
                Aerobics
              </Card.Text>
              <Card.Text className="card-txt-2">
                Price : ₹ 3000
              </Card.Text>
              <Link to="/registration" className="nav-link">
              <Button className="card-btn">Register</Button>
              
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
          </div>
    </div>
  );
}

export default Services;
