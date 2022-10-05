import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineGoogle
} from "react-icons/ai";
import { FaTiktok } from 'react-icons/fa';


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Getting to know  <span className="purple"> Mean Deep Clean </span>
            </h1>
            <p className="home-about-body">
              Mean Deep Clean uses cutting edge technologies to improve customer experience. Say goodbye to the days of calling in a cleaning service and waiting for them to come by to give you an estimate.  
              <br />
            <br /> 
                Mean Deep Clean offers clients &nbsp;
              <i>
                <b className="purple">Transparent pricing </b>, {" "}

                <b className="purple">
                Online booking
                </b>
                {" "} and {" "}
                <b className="purple">
                appointment mangement system 
                </b>
                {" "} and also {" "}
                <b className="purple">
                A staff with over 39 years of experience
                </b>
              </i>
              <br />  
              <br />  Our most requested services are  
              <br />
              <i>
                <b className="purple"> Deep Cleanings </b>
              </i>
              <br />
              <i>
                <b className="purple"> Move-in and Move-out cleanings</b>
              </i>
              <br />
              <i>
                <b className="purple"> Construction / Renovation clean up </b>
              </i>
              <br />
              <br />
              Appointments are available   &nbsp;
              <i>
                <b className="purple">Seven days a week </b> with discounts for{" "}
                <b className="purple">
                   recurring services
                </b>
              </i>
              <br />
              <br />
              We are here to facilitate all your <b className="purple">residential</b> and
              <i>
                <b className="purple">
                  {" "}
                  commercial cleaning needs
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* this is for the image on the bottom portion of the home page  */}
            {/* <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt> */}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find us on</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us on all your favorite social platforms
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/MeanDeepCleanNJ"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/meandeepclean/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.tiktok.com/@meandeepclean"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTiktok />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://g.page/MeanDeepClean?share"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineGoogle />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;