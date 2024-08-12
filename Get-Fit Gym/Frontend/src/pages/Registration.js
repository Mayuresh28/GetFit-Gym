
import React,{useState} from 'react'
import "../components/head.css";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "./registration.css";

// import logo from 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp';
import {BsFillPersonFill } from "react-icons/bs";
import { LuPersonStanding } from "react-icons/lu";
import {FaBirthdayCake } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { IoIosHeartHalf } from "react-icons/io";


function Registration() {

const [fname,setFname]=useState("");
const [lname,setLname]=useState("");
const [age,setAge]=useState("");
const [email,setEmail]=useState("");
const [phone,setPhone]=useState("");
const [service,setService]=useState("");

async function getData(e) {
  e.preventDefault();

  const registrationData = {
      fname: fname,
      lname: lname,
      age: age,
      email: email,
      phone: phone,
      service: service,
  };

  try {
      const response = await fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(registrationData)
      });

      if (response.ok) {
          alert("Registration Successful");
      } else {
          alert("Registration Failed");
      }
  } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
  }
}


  return (
    <div>
      <Header />

      <Container fluid id="reg-bg">
       
          
        <Row fluid id="reg-row-bg-1">
          
          <Col lg='12' md='8' sm='8' id="reg-col-bg-1">
            <Row id="reg-row-bg-2">
             
              <Col md="7" className="mt-4 mb-3 pb-3 pt-3" id="form-col-22">
                <Row>
                  <Col id="form-head-ctn">
                    <h3 className="text-light mb-4" id="form-title">
                      Registration
                    </h3>
                  </Col>
                </Row>
                <Row>
                  <Col sm='12'>
                    <Form  onSubmit={getData}>
                      <Row>
                        <Col md='2'>
                        <BsFillPersonFill className="form-icon mt-3" />

                        </Col>
                        <Col md="5">
                          <Form.Group className="mt-2 mb-2 pt-2 pb-2">
                            <Form.Control
                              type="text"
                              placeholder="First Name"
                              className="form-field"
                              onChange={(e)=>setFname(e.target.value)}
                              >
                              </Form.Control>
                          </Form.Group>
                        </Col>
                        <Col md="5">
                          <Form.Group className="mt-2 mb-2 pt-2 pb-2">
                            <Form.Control
                              type="text"
                              placeholder="Last Name"
                              className="form-field"
                              onChange={(e)=>setLname(e.target.value)}

                              ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mt-2 mb-2 pt-2 pb-2">
                        <Row>
                          <Col md="2">
                            <FaBirthdayCake className="form-icon" />
                          </Col>

                          <Col md="10">
                            <Form.Control
                              type="number"
                              placeholder="Age"
                              className="form-field"
                              onChange={(e)=>setAge(e.target.value)}

                            ></Form.Control>
                          </Col>
                        </Row>
                      </Form.Group>


                      <Form.Group className="mt-2 mb-2 pt-2 pb-2">
                        <Row>
                          <Col md='2'>
                         
                          <HiOutlineMail className="form-icon" />

                          </Col>
                          <Col md='10'>
                        <Form.Control
                          type="email"
                          placeholder="Email ID"
                          className="form-field"
                          onChange={(e)=>setEmail(e.target.value)}

                          ></Form.Control>
                          </Col>
                          </Row>
                      </Form.Group>

                      <Form.Group className="mt-2 mb-2 pt-2 pb-2">
                        <Row>
                          <Col md='2'>

                          <BiPhone className="form-icon" />

                          </Col>
                          <Col md='10'>
                        <Form.Control
                          type="text"
                          placeholder="Phone"
                          className="form-field"
                          onChange={(e)=>setPhone(e.target.value)}

                        ></Form.Control>
                        </Col>
                        </Row>
                      </Form.Group>

                      <Form.Group className="mt-2 mb-1 pt-2 pb-2">
                      <Row>
                          <Col md='2'>

                          <IoIosHeartHalf className="form-icon" />

                          </Col>
                          <Col md='10'>
                        <Form.Control
                          type="text "
                          placeholder="Service Name"
                          className="form-field"
                          onChange={(e)=>setService(e.target.value)}

                          ></Form.Control>
                          </Col>
                          </Row>
                      </Form.Group>

                      <Form.Group>
                        <Row className="mt-1">
                          <Col id="reg-btn-cnt">
                            <input id="card-btn-1" type='reset'></input>
                            <input id="card-btn-2" type='submit'></input>
                          </Col>
                        </Row>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
              </Col>
              <Col md="10" id="form-col-21">
                {/* <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                  alt="image not found"
                  height={400}
                /> */}
                {/* <table id='reg-table'>
                  <tr className='reg-th'>
                    <td  className='reg-td' > First Name </td>
                    <td  className='reg-td' > Last Name  </td>
                    <td  className='reg-td' >Age </td>
                    <td  className='reg-td' >Email </td>
                    <td  className='reg-td' >Contact </td>
                    <td  className='reg-td' >Services </td>
                  </tr>
                  <tr className='reg-th'>
                    <td className='reg-td' id='f-name'></td>
                    <td className='reg-td' id='l-name'></td>
                    <td className='reg-td'  id='a-ge'></td>
                    <td className='reg-td'  id='e-mail'></td>
                    <td className='reg-td'  id='c-ontact'></td>
                    <td className='reg-td'  id='s-ervice'></td>
                  </tr>
                </table> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Registration;


