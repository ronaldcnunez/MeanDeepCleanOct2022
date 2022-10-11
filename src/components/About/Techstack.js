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
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const popoverBiBuildingHouse = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Commerical Cleaning </Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);


const popoverBiPackage = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Move-in | Move-out Cleaning</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);



const popoverGiFlood = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Flooded Basement Cleaning</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);



const popoverGiPartyPopper = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Pre and Post Party Cleaning</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);


const popoverGiHomeGarage = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Garage cleaning</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);


const popoverGiWindow = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Cabinet cleaning</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);


const popoverMdOutlinePets = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Pet hair and odor removal</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);


const popoverMdOutlineLocalLaundryService = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Laundry Services</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);


const popoverMdConstruction = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Post Construction Cleaning</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
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
