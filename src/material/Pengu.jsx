import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import p1 from './img/p1.jpg'
import p2 from './img/p2.jpg'
import p3 from './img/p3.jpg'

class Pengu extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-3">
          <img src={p1} className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src={p2} className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src={p3} className="img-fluid z-depth-1" alt="" />
          </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

export default Pengu;