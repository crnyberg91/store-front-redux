import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBNavbar color="default-color" dark expand="md" fluid='true'>
        <MDBNavbarBrand>
          <strong className="white-text">SkiShop</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              {/* <MDBNavLink to="#!">Home</MDBNavLink> */}
            </MDBNavItem>
            <MDBNavItem>
              {/* <MDBNavLink to="#!">Features</MDBNavLink> */}
            </MDBNavItem>
            <MDBNavItem>
              {/* <MDBNavLink to="#!">Pricing</MDBNavLink> */}
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Look Around</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Rentals</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Apperal</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Bike Repair</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Info</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;