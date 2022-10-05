import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGoogle, BsFacebook  } from "react-icons/bs";
import InnerHTML from 'dangerously-set-html-content'

function ProjectCards(props) {
  const html = `
  <script src="https://ronaldscleaningcompany.launch27.com/jsbundle"></script>
  <iframe id="booking-widget-iframe" src="https://ronaldscleaningcompany.launch27.com/?w_cleaning" 
  style="border:none;width:100%;min-height:450px;overflow:hidden" scrolling="yes">
  </iframe>

`
  return (
    <Card className="project-card-view">
            <InnerHTML html={html}                
              style={{ 
                overflowY: 'scroll',
                border:'1px',
                width:'auto',
                float: 'left',
                height:'450px',  
                position:'relative'
                                          }}
            />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button variant="primary" href={props.fbLink} target="_blank">
          <BsFacebook /> &nbsp; FaceBook        
        </Button>
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        <Button variant="primary" href={props.glink} target="_blank">
          <BsGoogle /> &nbsp; Google 
        </Button>


        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
