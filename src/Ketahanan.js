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

export class Ketahanan extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <br/>
                <MDBContainer>
                <h1>BIDANG KETAHANAN SENI, BUDAYA, DAN EKONOMI</h1><hr/>
                <h2>Tugas Pokok</h2>
                <p>Bidang Ketahanan Sosial, Budaya, dan Ekonomi  mempunyai tugas melaksanakan pengelolaan ketahanan sosial, budaya, dan ekonomu untuk meningkatkan nilai indeks ketahanan sosial gatra sosial, budaya, dan ekonomi.</p>
                <h2>Fungsional</h2>
                <p>
                Bidang Ketahanan Seni, Budaya, dan Ekonomi mempunyai fungsi:
                    <ol>
                        <li>Penyusunan program kela Bidang Ketahanan Sosial, Budaya, dan Ekonomi;</li>
                        <li>Penyiapan bahan rumusan kebijakan teknis bidang ketahanan sosial, budaya, dan ekonomi;</li>
                        <li>Pelaksanaan kegiatan di bidang ketahanan sosial, budaya, dan ekonomi;</li>
                        <li>Pelaksanaan fasilitasi dan pembinaan lembaga adat bidang kesatuan bangsa;</li>
                        <li>Pelaksanaan dekonsentrasi dan tugas pembantuan;</li>
                        <li>Pemantauan, evaluasi, dan penyusunan laporan program Bidang Ketahanan Sosial, Budaya, dan Ekonomi;</li>
                        <li>Pelaksanaan tugas Iain yang diberikan oleh atasan sesuai dengan tugas dan fungsi Badan.</li>
                    </ol>
                </p>
                </MDBContainer>
                <br/>
                <CaroCard/>
                <Footer/>
            </div>
        )
    }
}

export default Ketahanan
