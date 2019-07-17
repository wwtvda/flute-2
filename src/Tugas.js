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
import {MDBContainer } from 'mdbreact';

export class Tugas extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <br/>
                <MDBContainer>
                <h1>TUGAS POKOK DAN FUNGSIONAL</h1><hr/>
                <h2>Tugas Pokok</h2>
                <p>Badan Kesatuan Bangsa dan Politik mempunyai tugas menyelenggarakan fungsi penunjang urusan pemerintahan bidang kesatuan bangsa dan politik.</p>
                <h2>Fungsional</h2>
                <p>
                    <ol>
                        <li>Penyusunan program Badan;</li>
                        <li>Perumusan kebijakan teknis dan pembinaan urusan bina ideologi, wawasan kebangsaan, karakter bangsa, politik dalam negeri, ketahanan ekonomi, sosial, budaya, agarna, organisasi kemasyarakatan, penanganan konflik, dan kewaspadaan nasional;</li>
                        <li>Pelaksanaan fasilitasi dan koordinasi penyelenggaraan urusan bina ideologi, wawasan kebangsaan, karakter bangsa, politik dalam negeri, ketahanan ekonomi, sosial, budaya, agama, organisasi kemasyarakatan, penanganan konflik, dan kewaspadaan nasional;</li>
                        <li>Pemantauan, evaluasi, dan pelaporan pelaksanaan kebijakan bidang bina ideologi, wawasan kebangsaan, karakter bangsa, politik dalam negeri, ketahanan ekonomi, sosial, budaya, agama, organisasi kemasyarakatan, penanganan konflik, dan kewaspadaan nasional;</li>
                        <li>Penyelenggaraan kegiatan kesekretariatan;</li>
                        <li>Penyusunan laporan pelaksanaan tugas Badan; dan</li>
                        <li>Pelaksanaan tugas lain yang diberikan oleh Gubemur sesuai dengan tugas dan fungsi Badan.</li>
                    </ol>
                </p>
                </MDBContainer>
                <br/><br/>
                <CaroCard/>
                <Footer/>
            </div>
        )
    }
}

export default Tugas
