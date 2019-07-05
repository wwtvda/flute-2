import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import p1 from './img/p1.jpg'
import p2 from './img/p2.jpg'
import p3 from './img/p3.jpg'

class MasksPage extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
            <MDBCol lg="4" md="12" className="mb-4">
                <img src={p1} className="rounded float-left" alt="aligment"  />
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-4">
                <img src={p2} className="rounded float-right" alt="aligment" />
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-4">
                <img src={p3} className="rounded float-right" alt="aligment" />
            </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MasksPage;