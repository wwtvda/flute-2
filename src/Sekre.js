import React, { Component } from 'react';
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

export class Sekre extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <br/>
                <MDBContainer>
                <h1>SEKRETARIAT</h1><hr/>
                <h2>Tugas Pokok</h2>
                <p>Sekretariat Badan Kesatuan Bangsa dan Politik mempunyai tugas menyelenggarakan kesekretariatan Badan.</p>
                <h2>Fungsional</h2>
                <p>
                Sekretariat mempunyai fungsi:
                    <ol>
                        <li>Penyusunan program kerja Sekretariat;</li>
                        <li>Perumusan kebijakan teknis bidang kesekretariatan;</li>
                        <li>Penyusunan program Badan;</li>
                        <li>Pengelolaan keuangan Badan;</li>
                        <li>Penyelenggaraan kepegawaian Badan;</li>
                        <li>Penyelenggaraan kerumahtanggaan, pengelolaan barang, kepustakaan, kearsipan, kehumasan, dan ketatalaksanaan Badan;</li>
                        <li>Pelaksanaan program administrasi perkantoran;</li>
                        <li>Pengelolaan data dan pengembangan sistem informasi;</li>
                        <li>Pelaksanaan program peningkatan pengembangan sistim pelaporan capaian kinerja dan pelaporan keuangan;</li>
                        <li>Penyelenggaraan pemantauan dan evaluasi program serta penyusunan laporan kinerja Badan;</li>
                        <li>Pelaksanaan fasilitasi koordinasi dan pengembangan kerja sama teknis;</li>
                        <li>Pelaksanaan fasilitasi perumusan kebijakan teknis bidang kesatuan bangsa dan politik;</li>
                        <li>Pelaksanaan dekonsentrasi dan tugas pembantuan;</li>
                        <li>Pemantauan, evaluasi, dan penyusunan laporan program Sekretariat; dan</li>
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

export default Sekre
