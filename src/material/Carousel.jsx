import React from "react";
import { MDBCarousel,
        MDBCarouselCaption,
        MDBCarouselInner,
        MDBCarouselItem,
        MDBView,
        MDBMask,
        MDBContainer,
        MDBBtn } from "mdbreact";
import S1 from './img/s1.jpg'
import S2 from './img/s2.jpg'
import S3 from './img/s3.jpg'


const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={S1}
              alt="First slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Kegiatan Sinau Pancasila Dan Wawasan Kebangsaan Di Kecamatan Sewon, Kabupaten Bantul</h3>
            <MDBBtn color="danger">Selengkapnya</MDBBtn>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={S2}
              alt="Second slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">RAPAT KERJA FORUM PEMBAURAN KEBANGSAAN DAERAH ISTIMEWA YOGYAKARTA</h3>
            <MDBBtn color="danger">Selengkapnya</MDBBtn>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={S3}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">APEL PAGI KARYAWAN KARYAWATI BADAN KESBANGPOL DIY</h3>
            <MDBBtn color="danger">Selengkapnya</MDBBtn>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;