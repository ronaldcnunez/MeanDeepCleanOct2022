import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsFillHouseDoorFill }  from "react-icons/bs";
import { BiBuildingHouse, BiPackage }  from "react-icons/bi";
import { GiFlood, GiPartyPopper, GiHomeGarage, GiWindow }  from "react-icons/gi";
import { MdOutlinePets, MdOutlineLocalLaundryService, MdConstruction}  from "react-icons/md";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';



const popoverBsFillHouseDoorFill = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Residential Cleaning</Popover.Header>
    <Popover.Body>
      We offer both standard cleanings and deep cleanings for houses and apartments of any size.
    </Popover.Body>
  </Popover>
);

const popoverBiBuildingHouse = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Commerical Cleaning </Popover.Header>
    <Popover.Body>
      Office cleanings that meet your budget and exceed your needs.
    </Popover.Body>
  </Popover>
);


const popoverBiPackage = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Move-in | Move-out Cleaning</Popover.Header>
    <Popover.Body>
      Our extremely through move-in / move-out cleanings will ensure you move in to a clean house and move out with your deposit in hand!
    </Popover.Body>
  </Popover>
);



const popoverGiFlood = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Flooded Basement Cleaning</Popover.Header>
    <Popover.Body>
      When your basement gets flooded you need to act <strong>QUICK</strong>. Book us for same day and next day flooded basement cleanings 
    </Popover.Body>
  </Popover>
);



const popoverGiPartyPopper = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Pre and Post Party Cleaning</Popover.Header>
    <Popover.Body>
      Even the best host needs a great assistant. Book us for any pre and post party cleanings.
    </Popover.Body>
  </Popover>
);


const popoverGiHomeGarage = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Garage cleaning</Popover.Header>
    <Popover.Body>
      Do you want your garage clean and your weekends free? Book us for garage clean to start the season on the right track.
    </Popover.Body>
  </Popover>
);


const popoverGiWindow = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Cabinet cleaning</Popover.Header>
    <Popover.Body>
      Schedule an appointment to get your cabinets organized. 
    </Popover.Body>
  </Popover>
);


const popoverMdOutlinePets = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Pet hair and odor removal</Popover.Header>
    <Popover.Body>
      If you love your pets but hate the mess they make this service is the one for you.
    </Popover.Body>
  </Popover>
);


const popoverMdOutlineLocalLaundryService = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Laundry Services</Popover.Header>
    <Popover.Body>
      Book an appointment and our laundry service as an add-on and leave the washing and folding to us.
    </Popover.Body>
  </Popover>
);


const popoverMdConstruction = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Post Construction Cleaning</Popover.Header>
    <Popover.Body>
      Book our construction cleaning and make construction dust &amp; debris a thing of the past.
    </Popover.Body>
  </Popover>
);




function Techstack() {

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <OverlayTrigger  placement="top" overlay={popoverBsFillHouseDoorFill}>
        <Col xs={4} md={2} className="tech-icons">
          <BsFillHouseDoorFill />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger  placement="top" overlay={popoverBiBuildingHouse}>
        <Col xs={4} md={2} className="tech-icons">
          <BiBuildingHouse />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger  placement="top" overlay={popoverBiPackage}>
        <Col xs={4} md={2} className="tech-icons">
          <BiPackage />
        </Col>
      </ OverlayTrigger>

      <OverlayTrigger  placement="top" overlay={popoverGiFlood}>
        <Col xs={4} md={2} className="tech-icons">
        <GiFlood />
        </Col>
      </ OverlayTrigger>



      <OverlayTrigger  placement="top" overlay={popoverGiPartyPopper}>
        <Col xs={4} md={2} className="tech-icons">
        <GiPartyPopper />
        </Col>
      </ OverlayTrigger>

      <OverlayTrigger  placement="bottom" overlay={popoverMdOutlinePets}>
        <Col xs={4} md={2} className="tech-icons">
        <MdOutlinePets />
        </Col>
      </ OverlayTrigger>

      <OverlayTrigger  placement="bottom" overlay={popoverMdOutlineLocalLaundryService}>
        <Col xs={4} md={2} className="tech-icons">
        <MdOutlineLocalLaundryService />
        </Col>
      </ OverlayTrigger>

      <OverlayTrigger  placement="bottom" overlay={popoverMdConstruction}>
        <Col xs={4} md={2} className="tech-icons">
        <MdConstruction />
        </Col>
      </ OverlayTrigger>

      <OverlayTrigger  placement="bottom" overlay={popoverGiWindow}>
        <Col xs={4} md={2} className="tech-icons">
        <GiWindow />
        </Col>
      </ OverlayTrigger>

      <OverlayTrigger  placement="bottom" overlay={popoverGiHomeGarage}>
        <Col xs={4} md={2} className="tech-icons">
        <GiHomeGarage />
        </Col>
      </ OverlayTrigger>









    </Row>
  );
}

export default Techstack;
