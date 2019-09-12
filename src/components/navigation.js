import { Link } from "gatsby"
import React from "react"
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
render(){
    return(
    <Navbar id="mainNav" expand="lg" className="navbar fixed-top">
        <Container>
    <NavbarBrand href="/">reactstrap</NavbarBrand>
    <NavbarToggler onClick={this.toggle} />
    <Collapse isOpen={this.state.isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
        <Link to="/about/">About</Link>
        </NavItem>
        <NavItem>
        <Link to="/about/">About</Link>
        </NavItem>
      </Nav>
    </Collapse>
    </Container>
  </Navbar>
)
}
}
