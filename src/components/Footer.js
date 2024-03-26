import React from "react";
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pk from "../img/pk.png"
import "../components/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <Row>
        <Col className="col"><div>
            <img src={pk} width={"80%"} alt="logo"/>
            
        </div></Col>
          <Col className="col">
            <h3>Service</h3>
          
            <p>Data Engineering</p>
            <p>Cloud Engineering</p>
            <p>Product Engineering</p>
            <p>DevOps</p>
            <p>Cloud Operations</p>
            <p>Quapty Engineering</p>
        
          </Col>
          <Col className="col"><h3>About</h3>
            <p>Insights</p>
            <p>
            Success Stories</p>
            <p>Events</p>
         
          </Col>
         
          <Col className="col"><h3>Social</h3>
            <p>Instagram</p>
            <p>Linkdin</p>
            <p>Youtube</p>
            <p>Facebook</p>
          </Col>
        </Row>
      </div>
  );
};

export default Footer;
