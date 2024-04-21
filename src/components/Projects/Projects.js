import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import resume from "../../Assets/Projects/resume.png";
import invoice from "../../Assets/Projects/invoice.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Resume Builder"
              description="Our resume builder is a user-friendly web application designed to simplify the process of creating professional resumes. With our intuitive interface and customizable templates, users can quickly generate personalized resumes with unique skills and experiences."
              ghLink="https://github.com/sumit171204/resume-builder"
              demoLink="https://resume-builder-sumit171204s-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoice}
              isBlog={false}
              title="Invoice Generator"
              description="Our invoice generator is a powerful tool designed to streamline the process of creating professional invoices for businesses. With our intuitive interface and customizable features, users can easily generate, customize, and send invoices to their clients with minimal effort."
              ghLink="https://github.com/sumit171204/Invoice-Generator"
              demoLink="https://invoice-generator-tau-three.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
