import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {Container, Row, Col} from "reactstrap"

import image from "../images/about-bg.jpg"

const About = () => (
  <Layout title={"About me"} siteTitle={"This is what I do."} bg={image}>
    <Container>
        <Row>
            <Col lg={8} md={10} className="mx-auto">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
            </Col>
        </Row>
    </Container>
  </Layout>
)

export default About
