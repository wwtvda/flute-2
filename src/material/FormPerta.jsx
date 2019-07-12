import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBIcon } from 'mdbreact';

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <div className="grey-text">
              <MDBInput
                label="Nama"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Email"
                icon="at"
                group
                type="email"
                validate
              />
              <MDBInput
                label="Pertanyaan"
                icon="map-marker-alt"
                group
                type="textarea"
                row="3"
                validate
                error="wrong"
                success="right"
              />
              <p><strong>CAPTCHA</strong></p><MDBBtn color="danger">Re-CHAPTCHA</MDBBtn>
              <MDBInput
                label="Kode CAPTCHA"
                icon="asterisk"
                group
                type="text"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn color="danger">
                <MDBIcon icon="paper-plane" className="mr-1" /> Kirim
              </MDBBtn> 
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;