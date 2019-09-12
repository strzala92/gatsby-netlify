import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col} from 'reactstrap'

const Header = ({ siteTitle }) => (
  <header className="masthead">
    <div className="overlay"></div>
    <Container>
      <Row>
        <Col lg={8} md={10} className="mx-auto">
          <div className="site-heading">
            <h1>Clean Blog</h1>
            <span className="subheading">{ siteTitle }</span>
          </div>
          </Col>
      </Row>
     </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
