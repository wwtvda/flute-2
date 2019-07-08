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
                label="Alamat"
                icon="map-marker-alt"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Pekerjaan"
                icon="briefcase"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="No. Telepon"
                icon="phone"
                group
                type="number"
                validate
              />
              <MDBInput
                label="Email"
                icon="at"
                group
                type="email"
                validate
              />
              <MDBInput
                label="No. Identitas/KTP"
                icon="id-card"
                group
                type="number"
                validate
              />
              <p><strong>Upload KTM/SIM</strong></p>
              <MDBBtn color="danger">Upload</MDBBtn>
              <p>File type : PNG, BMP, JPG, JPEG</p>
              <MDBInput
                label="Tujuan Penggunaan"
                icon="location-arrow"
                group
                type="text"
                validate
              />
              <MDBInput
                label="Permohonan Informasi"
                icon="sticky-note"
                group
                type="text"
                validate
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