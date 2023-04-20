import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailForm";
import logo from "../assets/img/logo.png";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={18} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/jpngoga" target="_blank">
                <BsGithub
                  style={{
                    fontSize: "26",
                    color: "#5C31B1",
                  }}
                />
              </a>
              <a
                href="https://web.facebook.com/ngoga.jeanpaul/"
                target="_blank"
              >
                <BsFacebook style={{ fontSize: "26", color: "#5C31B1" }} />
              </a>
              <a href="https://www.instagram.com/ngojepabilly/" target="_blank">
                <AiFillInstagram style={{ fontSize: "30", color: "#5C31B1" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/ngoga-jean-paul-billy-%E6%AF%94%E5%88%A9-1a7525111/"
                target="_blank"
              >
                <AiFillLinkedin style={{ fontSize: "30", color: "#5C31B1" }} />
              </a>
            </div>
            <p>Copyright 2023. @NgojepaBilly</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
