import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ly Hoang Long </span>
            from <span className="purple"> HoChiMinh, Vietnam.</span>
            <br />I am a junior{" "}
            <span className="purple">Information Technology industry</span> in
            HCMUE
            <br />
            I'm passionate about Mobile Application
            <br /> I like automating things, building mobile application with
            all the knowledge acquired at school such as programming basics and
            algorithms
            <br />
            as well as learning basic languages such as:{" "}
            <span className="purple">Html, Css, Javascript,....</span> and more
            research from <span className="purple">mobile application</span> to
            apply in practice, exploring scalability problems and improving
            efficiency and performance.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
