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
import Nav from './material/Nav';
import {MDBContainer } from 'mdbreact';

export class Ideo extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <MDBContainer>
                <h1>BIDANG BINA IDEOLOGI DAN KEWASPADAAN NASIONAL</h1><hr/>
                <h2>Tugas Pokok</h2>
                <p>Bidang Bina Ideologi dan Kewaspadaan Nasional mempunyai tugas melaksanakan pembinaan ideologi, kehidupan beragama, wawasan kebangsaan, dan kewaspadaan nasional untuk meningkatkan nilai indeks ketahanan nasional gatra ideologi.</p>
                <h2>Fungsional</h2>
                <p>
                Bidang Bina Ideologi dan Kewaspadaan Nasional mempunyai fungsi:
                    <ol>
                        <li>Penyusunan program kerja Bidang Bina Ideologi dan Kewaspadaan Nasional;</li>
                        <li>Penyiapan bahan rumusan kebijakan teknis bidang bina ideologi dan kewaspadaan nasional;</li>
                        <li>Penetapan kebijakan teknis di bidang ideologi negara, kehidupan beragama, kehidupan demokrasi, kearifan lokal, pendidikan karakter bangsa, wawasan kebangsaan, dan kewaspadaan nasional;</li>
                        <li>Pelaksanaan dan fasilitasi kegiatan di bidang ideologi negara, kehidupan beragama, kehidupan demokrasi, kearifan lokal, pendidikan karakter bangsa, wawasan kebangsaan, dan kewaspadaan nasional;</li>
                        <li>Pelaksanaan program pembinaan ideologi dan kewaspadaan nasional;</li>
                        <li>Pengawasan/pemantauan penyelenggaraan pemerintahan di bidang ideologi negara, kehidupan beragama, kehidupan demokrasi, kearifan lokal, pendidikan karakter bangsa, wawasan kebangsaan, dan kewaspadaan nasional;</li>
                        <li>Pelaksanaan fasilitasi dan peningkatan kapasitas aparatur kesatuan bangsa dan politik di bidang ideologi negara, kehidupan beragama, kehidupan demokrasi, kearifan lokal, pendidikan karakter bangsa, wawasan kebangsaan, dan kewaspadaan nasional;</li>
                        <li>Pelaksanaan dekonsentrasi dan tugas pembantuan;</li>
                        <li>pemantauan, evaluasi, dan penyusunan laporan program Bidang Bina Ideologi dan Kewaspadaan Nasional; dan</li>
                        <li>pelaksanaan tugas lain yang diberikan oleh atasan sesuai dengan tugas dan fungsi Badan.</li>
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

export default Ideo
