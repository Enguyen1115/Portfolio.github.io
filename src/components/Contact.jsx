import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import ContactForm from "./ContactForm";

const StyledSection = styled.section`
  min-height: 89vh;
  padding-top: var(--nav-height);
  text-align: center;
`;

export default function Contact() {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex">
          <Title>
            <h2>Contact Me</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Container>
          <div className="info">
            <p>Email: Ethannguyen1115@gmail.com</p>
            <p>Phone: (587)566-5252</p>
          </div>
          {/* <ContactForm /> */}
        </Container>
      </StyledSection>
    </Element>
  );
}
