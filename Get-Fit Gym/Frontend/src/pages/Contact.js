import "../components/head.css";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "./contact.css";

// import logo from 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp';
import { BsFillPersonFill } from "react-icons/bs";
import { LuPersonStanding } from "react-icons/lu";
import { FaBirthdayCake } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import {IoShareSocial} from "react-icons/io5";

function Contact() {
  return (
    <div>
      <Header />

      <Container fluid id="contact-bg">
        <Row id="con-row-bg1">
          <Col id="con-col-bg1">
            <h1>Get In Touch</h1>
            <Row id="con-row-bg2">
              <Col className="con-col-bg21" md="3" id="con-card-1">
                <Row className="con-card-head">
                  <Col md="6">
                    <span className="con-card-icon" id="head-1">
                      <IoLocationSharp/>
                    </span>
                  </Col>
                </Row>
                <Row>
                  <h3 className="cont-title">
                    Office Address
                  </h3>
                </Row>
                <Row id="cont-para-cnt">
                  <p className="cont-para">
                    4709 Shandowmar Drive Kenner , LA 70062
                  </p>
                </Row>
              </Col>
              <Col className="con-col-bg21" md="3" id="con-card-2">
              <Row className="con-card-head">
                  <Col md="6">
                    <span className="con-card-icon" id="head-2">
                      <HiOutlineMail/>
                    </span>
                  </Col>
                </Row>
                <Row>
                  <h3 className="cont-title">
                    Contact No.
                  </h3>
                </Row>
                <Row className="cont-para">
                  
                  <p >
                    Email : ab12@gmail.com
                  </p>
                  <p >
                    Phone : 8946582567
                  </p>
                </Row>
              </Col>
              <Col className="con-col-bg21" md="3" id="con-card-3">
              <Row className="con-card-head">
                  <Col md="6">
                    <span className="con-card-icon" id="head-3">
                      <IoShareSocial />
                    </span>
                  </Col>
                </Row>
                <Row>
                  <h3 className="cont-title">
                    Social Handles
                  </h3>
                </Row>
                 <Row id="social-icon-cont">
                  <span className="social-icon">
                  <FaInstagram/>
                  </span>
                  <span className="social-icon">
                  < FaTwitter />
                  </span>
                  <span className="social-icon">
                  <FaFacebookF/>
                  </span>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
