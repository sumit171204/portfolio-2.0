import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sumit </span>
            from <span className="purple"> Nadiad, India.</span>
            <br />
            <br />
            I am currently in last year of BCA at SMT. CHANDABEN MOHANBHAI PATEL INSTITUTE OF COMPUTER APPLICATIONS in Charusat University, Changa.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Videos
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Code is poetry written for clients by engineers."{" "}
          </p>
          <footer className="blockquote-footer">Sumit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
