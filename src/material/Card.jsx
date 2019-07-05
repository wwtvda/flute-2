import React from 'react';
import { MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

const CardExample = () => {
  return (
    <MDBContainer>
    <MDBRow>
        <MDBCol md="4">
        <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
            <MDBCardBody >
            <MDBCardTitle>Berita 1</MDBCardTitle>
            <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
            </MDBCardText>
            <MDBBtn href="#">Selengkapnya</MDBBtn>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol md="4">
        <MDBCard style={{ width: "22rem" }} >
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
            <MDBCardBody >
            <MDBCardTitle>Berita 2</MDBCardTitle>
            <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
            </MDBCardText>
            <MDBBtn href="#">Selengkapnya</MDBBtn>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol md="4">
        <MDBCard style={{ width: "22rem" }} >
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
            <MDBCardBody >
            <MDBCardTitle>Berita 3</MDBCardTitle>
            <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
            </MDBCardText>
            <MDBBtn href="#">Selengkapnya</MDBBtn>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
    </MDBRow>
    <br/>
    <MDBRow>
    <MDBCol md="4">
    <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
        <MDBCardTitle>Berita 1</MDBCardTitle>
        <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
        </MDBCardText>
        <MDBBtn href="#">Selengkapnya</MDBBtn>
        </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol md="4">
    <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
        <MDBCardTitle>Berita 2</MDBCardTitle>
        <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
        </MDBCardText>
        <MDBBtn href="#">Selengkapnya</MDBBtn>
        </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol md="4">
    <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
        <MDBCardTitle>Berita 3</MDBCardTitle>
        <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
        </MDBCardText>
        <MDBBtn href="#">Selengkapnya</MDBBtn>
        </MDBCardBody>
    </MDBCard>
    </MDBCol>
</MDBRow>
</MDBContainer>
  )
}

export default CardExample;