import React, { Component } from 'react'
/*css*/
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
/* Material */
import Navbar from './material/Navbar';
import CaroCard from './material/CaroCard';
import Footer from './material/Footer';
import Nav from './material/NaviBar';
import {MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Map from './material/Map';

export class Kontak extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <br/>
                <MDBContainer>
                <h1>KONTAK</h1><hr/>
                    <MDBRow>
                        <Map/>
                    </MDBRow>
                    <br/>
                    <MDBRow>
                        <MDBCol>
                            <h4>Kantor Kami</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                            &nbsp; Alamat<br/>
                            Jalan Tentara Rakyat Mataram Nomor 53 (Selatan Universitas Janabadra), 
                            Kota Yogyakarta<br/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"/></svg>
                            &nbsp; Telepon<br/>
                            0274 551136/551137<br/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"/></svg>
                            &nbsp; Email<br/>
                        </MDBCol>
                        <MDBCol>
                            <h4>Jam Kerja</h4>
                            Senin-Kamis &nbsp; :  08:00-16:00<br/>
                            Jumat &nbsp;&nbsp; : 08:00-14.30<br/>
                            ===================================<br/><br/>
                            
                            <b>JAM PELAYANAN PERIZINAN PENELITIAN</b><br/>
                            Pemasukan Berkas Rekomendasi Penelitian<br/>
                            Senin-Kamis &nbsp; : 08:00-11.30<br/>
                            Jumat &nbsp;&nbsp; : 08:00-11.00<br/><br/>

                            Pengambilan Surat Rekomendasi<br/>
                            Senin-Kamis &nbsp; : 08:00-14.00<br/>
                            Jumat &nbsp;&nbsp; : 08:00-14.00<br/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br/>
                <CaroCard/>
                <Footer/>
            </div>
        )
    }
}

export default Kontak
