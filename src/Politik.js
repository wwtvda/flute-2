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

export class Politik extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <br/>
                <MDBContainer>
                <h1>BIDANG POLITIK DALAM NEGERI DAN KEMASYARAKATAN</h1><hr/>
                <h2>Tugas Pokok</h2>
                <p>Bidang Politik Dalam Negeri dan Kemasyarakatan mempunyai tugas melaksanakan pembinaan politik dalam negeri dan organisasi kemasyarakatan untuk meningkatkan nilai indeks ketahanan nasional gatra politik.</p>
                <h2>Fungsional</h2>
                <p>
                Bidang Politik Dalam Negeri dan Kemasyarakatan mempunyai fungsi:
                    <ol>
                        <li>Penyusunan program kerja Bidang politik Dalam Negeri;</li>
                        <li>Penyiapan bahan rumusan kebijakan teknis bidang politik dalam negeri;</li>
                        <li>Pelaksanaan koordinasi penetapan kebijakan teknis di bidang politik dalam negeri;</li>
                        <li>Pelaksanaan kegiatan di bidang politik dalam negeri;</li>
                        <li>Pelaksanaan program kerja politik dalam negeri;</li>
                        <li>Pelaksanaan koordinasi dan fasilitasi pembinaan penyelenggaraan pemerintahan di bidang politik dalam negeri;</li>
                        <li>Pembinaan dan pengawasan organisasi kemasyarakatan;</li>
                        <li>Pengawasan/pemantauan penyelenggaraan pemerintahan bidang pendidikan politik;</li>
                        <li>Pelaksanaan fasilitasi dan peningkatan kapasitas aparatur di bidang pendidikan politik;</li>
                        <li>Pelaksanaan dekonsentrasi dan tugas pembantuan;</li>
                        <li>Pemantauan, evaluasi, dan penyusunan laporan program Bidang Politik Dalam Negeri; dan</li>
                        <li>Pelaksanaan tugas lain yang diberikan oleh atasan sesuai dengan tugas dan fungsi Badan.</li>
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

export default Politik
