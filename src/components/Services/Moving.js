import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineGoogle
} from "react-icons/ai";
import { FaTiktok, FaReceipt } from 'react-icons/fa';
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";


function MovingServices() {
  let navigate = useNavigate();

  const navigateBookNow = () => {
    navigate('/booknow');
  };

    return (
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Moving on up!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                  🏠 📦
                  </span>
                </h1> 
                <h1 className="heading-name">
                  Mean Deep Clean's
                </h1>
                <h1 className="heading-name">
                  <strong className="main-name">Move-in Move-out</strong>
                </h1>
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Typewriter 
                  options={{ 
                    strings: [
                      "Same day",
                      "Next Day",
                      "Move-in",
                      "Move-out"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 100,
                  }}/>              
                </div>
              </Col>
              </Row>
          </Container>
        </Container>
        <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                Mean Deep Clean's  <span className="purple"> Moving cleanings </span>
              </h1>
              <p className="home-about-body">
              When you move into a new home, you’ve probably seen it at its best and missed all those little corners that were <b className="purple"> {" "} dirty, dusty, moldy or stained.</b>{" "} 
              We make sure all those corners are <b className="purple"> {" "}clean and hygienic.</b>{" "}  You don’t need any unpleasant surprises that first day and night in your new abode. 
              <br/>
              <br/>
              Sometimes we forget after living years or even just a matter of months in a  <b className="purple"> {" "} house or apartment</b>{" "} that dirt and debris have piled up while you ignored it or kept putting it off.
              If you don’t get the  <b className="purple"> {" "} old place</b>{" "} cleaned adequately, you are likely to get complaints and possibly have to do it again. 
              If you are a  <b className="purple"> {" "} renter</b>{" "}, you could lose that  <b className="purple"> {" "} deposit</b>{" "} you made when you moved in. 
              Landlords are quick to claim that deposit if every inch of the premises is not in  <b className="purple"> {" "} mint condition</b>{" "}
              <br/>
              <br/>   
              </p>
              <Button onClick={navigateBookNow} style={{ width: "500px" }} >
              <FaReceipt />
                &nbsp; Free Estimate  
            </Button>
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
      </section>
    );
}

export default MovingServices;