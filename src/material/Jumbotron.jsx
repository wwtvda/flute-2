import React from "react";
import { MDBJumbotron, MDBRow, MDBCol, MDBCardTitle } from "mdbreact";

const JumbotronPage = () => {
  return (
    
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-10 my-10" style={{ backgroundImage: `url(https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?cs=srgb&dl=adult-business-meeting-business-people-1438072.jpg&fm=jpg)` }}>
              <MDBCol >
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">SELAMAT DATANG DI WEBSITE KESBANGPOL</MDBCardTitle>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    
  )
}

export default JumbotronPage;