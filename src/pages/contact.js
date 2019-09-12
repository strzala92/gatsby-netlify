import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {Container, Row, Col} from "reactstrap"

import image from "../images/contact-bg.jpg"

const About = () => (
  <Layout title={"Contact Me"} siteTitle={"Have questions? I have answers.  "} bg={image}>
    <Container>
        <Row>
            <Col lg={8} md={10} className="mx-auto">
            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!Name</p>
            <form name="sentMessage" id="contactForm" noValidate="">
          <div className="control-group">
            <div className="form-group floating-label-form-group controls">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="Name" id="name" required="" data-validation-required-message="Please enter your name."/>
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="control-group">
            <div className="form-group floating-label-form-group controls">
              <label>Email Address</label>
              <input type="email" className="form-control" placeholder="Email Address" id="email" required="" data-validation-required-message="Please enter your email address." aria-invalid="false"/>
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
            <div className="form-group col-xs-12 floating-label-form-group controls">
              <label>Phone Number</label>
              <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required="" data-validation-required-message="Please enter your phone number."/>
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
            <div className="form-group floating-label-form-group controls">
              <label>Message</label>
              <textarea rows="5" className="form-control" placeholder="Message" id="message" required="" data-validation-required-message="Please enter a message."></textarea>
              <p className="help-block text-danger"></p>
            </div>
            <br/>
            <div className="form-group">
            <button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
          </div>
          </div>
          </div>
          </div>
        </form>
            </Col>
        </Row>
    </Container>
  </Layout>
)

export default About
