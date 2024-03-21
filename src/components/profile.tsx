import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";

const BorderImage = styled.div`
  border: 1px red solid;
  position: absolute;
  height: 250px;
  width: 250px;
  transform: translate(25px, 25px);
`;

const Section = styled.section`
  background: linear-gradient(90deg, #4831d4 67%, #ccf381 33%);
  width: 100%;
  padding: 6rem;
`;

const Profile = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} md={7}>
            <Row align="center" style={{ height: "100%" }} wrap="wrap">
              <article>
                <div>
                  <h1 aria-label="Développeur web et mobile">
                    <span>Développeur Frontend</span>
                  </h1>
                  <p>
                    Développeur web frontend expérimenté, passionné par
                    l'innovation et la collaboration, à la recherche d'une
                    entreprise créative pour contribuer à son succès
                  </p>
                </div>
                <Row aria-label="Points forts.">
                  <Col md={6}>
                    <p>
                      Maîtrise des technologies React, React Native, Vue.js,
                      Ruby on Rails, etc.
                    </p>
                  </Col>
                  <Col md={6}>
                    <p>
                      Expérience en gestion de projet et développement
                      web/mobile.
                    </p>
                  </Col>
                </Row>
              </article>
            </Row>
          </Col>
          <Col xs={12} md={5}>
            <Row>
              <Image
                src="/photo_cv.jpg"
                alt="Next.js Logo"
                width={250}
                height={250}
                priority
                style={{ zIndex: 2 }}
              />
              <BorderImage />
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Profile;
