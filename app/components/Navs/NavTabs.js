import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from 'reactstrap';

const NavTabs = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div>
      <Nav className="nav-tabs">
        <NavItem>
          <NavLink href="#" active>
            OPEN
          </NavLink>
          <NavLink href="#" active>
            CLOSED
          </NavLink>
          <NavLink href="#" active>
            OWN
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavTabs;
