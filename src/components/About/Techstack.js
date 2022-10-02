import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import { FaViruses }  from "react-icons/fa";
import { BsFillHouseDoorFill }  from "react-icons/bs";
import { BiBuildingHouse, BiPackage }  from "react-icons/bi";
import { GiFlood, GiPartyPopper, GiHomeGarage, GiWindow }  from "react-icons/gi";
import { MdOutlinePets, MdOutlineLocalLaundryService, MdConstruction, MdCleaningServices}  from "react-icons/md";





function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BsFillHouseDoorFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiBuildingHouse />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiPackage />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiFlood />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiPartyPopper />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlinePets />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineLocalLaundryService />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdConstruction />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiWindow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiHomeGarage />
      </Col>
    </Row>
  );
}

export default Techstack;
