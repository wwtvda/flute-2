import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBCol} from "mdbreact";

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="red darken-3" dark expand="md">
        <MDBCol md="0">
          	<img alt="logo" height="100px" width="75px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Yogyakarta_Logo.svg/357px-Yogyakarta_Logo.svg.png"/>
      	</MDBCol>
        <MDBNavbarBrand>
        <MDBCol md="3">
          <h8>Pemerintah Daerah Istimewa Yogyakarta</h8>
          <h4 className="white-text">BADAN KESATUAN BANGSA DAN POLITIK</h4> 
          </MDBCol>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;