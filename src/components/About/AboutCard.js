import React from "react";
import Card from "react-bootstrap/Card";
import { SiFastly } from "react-icons/si";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";




function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
             It's quite simple. <span className="purple"> Great cleaners  </span>
              +  <span className="purple"> Great software</span>
            <br />Come together to bring you the peace of mind you so righfully deserve.
            <br />
            <br />
            The cleaning company you've always dreamed of
          </p>
          <ul>
            <li className="about-activity">
              <BsFillCalendarCheckFill /> Same day and Next day service 
            </li>
            <li className="about-activity">
              <SiFastly />  Book an appointment within seconds  
            </li>
            <li className="about-activity">
              <GiEarthAmerica />  Organic, natural and eco-friendly options available 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A clean environment elevates a clear mind."{" "}
          </p>
          <footer className="blockquote-footer">Confucius</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

