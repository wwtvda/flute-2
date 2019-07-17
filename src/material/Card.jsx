import React from 'react';
import { MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import c11 from './img/c11.jpg';
import c22 from './img/c22.jpg';
import c333 from './img/c333.jpg';
import a1 from './img/a1.jpg'; 
import a2 from './img/a2.jpg'; 
import a3 from './img/a3.jpg';

const CardExample = () => {
  return (
    <MDBContainer>
    <MDBRow>
        <MDBCol md="4">
        <MDBCard style={{ width: "22rem" }} >
            <MDBCardImage className="img-fluid" src={c11} waves />
            <MDBCardBody >
            <MDBCardTitle>Kegiatan Sinau Pancasila Dan Wawasan Kebangsaan Di Kecamatan Sewon, Kabupaten Bantul</MDBCardTitle>
            <MDBCardText>
            Kegiatan Sinau Pancasila dan wawasan Kebangsaan di kabupaten Bantul diawali dikecamatan Sewon....
            </MDBCardText>
            <MDBBtn href="#">Selengkapnya</MDBBtn>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol md="4">
        <MDBCard style={{ width: "22rem" }} >
            <MDBCardImage className="img-fluid" src={c22} waves />
            <MDBCardBody >
            <MDBCardTitle>Rapat Kerja Forum Pembauran Kebangsaan Daerah Istimewa Yogyakarta</MDBCardTitle><br/>
            <MDBCardText>
            Dengan mengambil tema  Membangun Toleransi dan Persatuan Bangsa, pada hari Rabu,...
            </MDBCardText><br/>
            <MDBBtn href="#">Selengkapnya</MDBBtn>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol md="4">
        <MDBCard style={{ width: "22rem" }} >
            <MDBCardImage className="img-fluid" src={c333} waves />
            <MDBCardBody >
            <MDBCardTitle>Sosialisasi dan Rapat Koordinasi Pencegahan dan Penyalahgunaan Narkoba di Bengkulu</MDBCardTitle>
            <MDBCardText>
            Pada hari Rabu 19 Juni sampai Jumat 21 Juni 2019 terdapat Sosialisasi dan Rapat Koordinasi...
            </MDBCardText><br/>
            <MDBBtn href="#">Selengkapnya</MDBBtn>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
    </MDBRow>
    <br/>
    <MDBRow>
    <MDBCol md="4">
        <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src={a1} waves />
            <MDBCardBody >
            <MDBCardTitle>Pemantauan Tenaga Kerja Asing Oleh Pemda DIY</MDBCardTitle><br/>
            <MDBCardText>
            Pada hari Rabu tanggal 19 Juni 2019  dimulai pukul 08.30 dan berakhir pada pukul  12.00 WIB,...
            </MDBCardText>
            <MDBBtn href="/berita1">Selengkapnya</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>
    <MDBCol md="4">
    <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={a2} waves />
        <MDBCardBody>
        <MDBCardTitle>Pemantauan Situasi Pasca Pemilu di Kabupaten Kulon Progo</MDBCardTitle>
        <MDBCardText>
        Pada hari Senin tanggal 27 Mei 2019 pukul 10.30 WIB Tim Pemantau Pemilu 2 2019...
        </MDBCardText><br/>
        <MDBBtn href="#">Selengkapnya</MDBBtn>
        </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol md="4">
    <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={a3} waves />
        <MDBCardBody>
        <MDBCardTitle>Pemantauan Pemilu Serentak Tahun 2019 di Kabupaten Gunungkidul</MDBCardTitle>
        <MDBCardText>
        Pada hari Senin tanggal 27 Mei 2019 pukul 11.25-12.00 WIB di ruang tamu KPUD Kab. Gunungkidul...
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