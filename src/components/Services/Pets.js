import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import Particle from "../Particle";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineGoogle
} from "react-icons/ai";
import { FaTiktok, FaReceipt } from 'react-icons/fa';
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";



function PetServices() {
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
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                🐕  🐈  🦜  🐇
                </span>
              </h1>
              <h1 className="heading-name">
                Mean Deep Clean's
              </h1>
              <h1 className="heading-name">
                <strong className="main-name"> Cleaning for Pet owners</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Typewriter 
                options={{ 
                  strings: [
                    "Dogs",
                    "Cats",
                    "Birds",
                    "Reptiles",
                    "Rabbits"
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
              Getting to know  <span className="purple"> Mean Deep Clean </span>
            </h1>
            <p className="home-about-body">
              Do you turn away guests because you are embarrassed by the odor and mess that is caused by your    
              <b className="purple"> {" "} pets</b>?
             You aren't alone. Many 
              <b className="purple"> {" "} Pet Owners </b>
              are not thrilled with the idea of inviting people over because of the 
              <b className="purple"> {" "} mess and smell </b>
              their furry loved ones leave behind. 

              <br/> 
              <b className="purple"> {" "} Our professionals </b>
                 make sure your home is free of pet hair and odor.
              They systematically review the space, develop a strategy to perform the job and waste no time in 
              <b className="purple"> {" "} removing dirt, sanitizing, vacuuming, Swiffering and cleaning </b>
              areas that our 
              <b className="purple"> {" "} furry loved ones  </b>              
              hide in.
              <br />
              <br /> 
              Every regular cleaning includes {" "} 
              <b className="purple">
                bathrooms, kitchen, common room and bedrooms. 
              </b>  
              {" "} We also bring all  
              <b className="purple"> {" "}
                cleaning supplies
              </b>  
              {" "}and will use yours if requested.
              <i>  
              <br />
              <br /> 
              All our standard cleanings include {" "} 
              <b className="purple"> dusting  </b>{" "} &amp;              
              <b className="purple"> {" "} washing </b>of all reachable surfaces, 
              <b className="purple"> {" "} wiping </b>the exterior of all kitchen appliances &amp;  
              <b className="purple"> {" "} cabinets </b>. 
              <b className="purple"> cleaning  </b>of the bathrooms {" "}&amp;    
              <b className="purple"> {" "} vacuuming</b> {" "}&amp;
              <b className="purple"> {" "} Swiffering </b>of all floors.
              <br/>
              <br/>
              <br/>
              <b className="purple">
                Pet cleanings 
                </b>
                {" "} are an add on to any  {" "}
                <b className="purple">
                Standard   
                </b>
                {" "} or {" "}
                <b className="purple">
                Deep Clean  
                </b>
                {" "} appointment. {" "}
              </i>
              <br/>
              <br/>
              <Button onClick={navigateBookNow} style={{ width: "500px" }} >
              <FaReceipt />
                &nbsp; Free Estimate  
            </Button>
            </p>
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

export default PetServices;