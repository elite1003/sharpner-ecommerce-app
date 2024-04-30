import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import bandMemberImg from "../../assets/bandMembers.png";
const About = () => {
  return (
    <Container className="d-flex ">
      <Row>
        <Col xs={6} md={4}>
          <Image src={bandMemberImg} thumbnail />
        </Col>
        <Col className="align-self-center">
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illum
            minus unde, esse reiciendis atque, obcaecati veritatis, voluptatum
            exercitationem illo cumque eum quasi perferendis animi quis
            asperiores eveniet omnis repellendus tempore. Provident, pariatur
            eos laboriosam quas delectus tempora exercitationem! Eius iste error
            non repudiandae consequuntur est id odit labore, doloremque nam quae
            dolore itaque blanditiis in quos, fuga mollitia ratione. Qui
            corrupti earum culpa ad ratione similique voluptate obcaecati quod.
            Amet pariatur sint sequi, aut, in voluptatem dolorem placeat quidem
            nostrum dicta tempore ratione nisi voluptas beatae tempora iure ipsa
            quibusdam soluta ducimus. Iusto deleniti illum, dolores nostrum
            sequi iste?
          </h4>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
