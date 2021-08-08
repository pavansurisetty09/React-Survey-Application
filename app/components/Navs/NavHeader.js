import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './navheader.css';

const NavHeader = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Surveys</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        {/* <Collapse isOpen={isOpen} navbar> */}
        <Nav className="mr-auto" navbar>
          <Button size="sm">
            <Link className="nav-btn" to="/shortcuts">
              shortcuts
            </Link>
          </Button>
          <NavItem>
            <NavLink
              className="nav-top"
              href="https://github.com/reactstrap/reactstrap"
            >
              Manage Surveys
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              New Survey
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              Options
            </NavLink>
          </NavItem>
        </Nav>
        {/* </Collapse> */}
      </Navbar>
    </div>
  );
};

export default NavHeader;
