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
import c1 from './material/img/c1.jpg';
import berita1 from './material/img/berita1.jpg';
import berita11 from './material/img/berita11.jpg';
import {MDBContainer} from 'mdbreact'

export class Berita1 extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <MDBContainer><br/>
                <h1>Kegiatan Sinau Pancasila Dan Wawasan Kebangsaan Di Kecamatan Sewon, Kabupaten Bantul</h1><hr/>
                <img src={c1} alt="Asmara"/>
                <p className="text-justify">Kegiatan Sinau Pancasila dan wawasan Kebangsaan di 
                kabupaten Bantul diawali dikecamatan Sewon. Kegiatan ini dilaksanakan pada 
                hari Kamis, tanggal 4 Juni tahun 2019, bertempat di Aula Kecamatan Sewon.<br/>
                Sebagai  Narasumber dari kegiatan tersebut adalah Eko Suswanto 
                Ketua  komisi A DPRD DIY, Agung Supriyono Kaban Kesbangpol DIY, 
                dan Surono dari Pusat Studi Pancasila UGM.<br/>
                Peserta dari kegiatan ini adalah Pasukan Pengibar Bendera (Paskibra) 
                Kecamatan Sewon sejumlah  kurang lebih 90 orang,Tokoh Agama dan Tokoh Masyarakat 
                Kecamatan Sewon lebih kurang 10 orang.<br/>
                Kegiatan diawali dengan menyanyikan lagu Kebangsaan Indonesia Raya, 
                dilanjutkan pemaparan materi oleh Narasumber , Tanya jawab serta diskusi  
                dan diakhiri dengan menyanyikan lagu Bagimu Negeri.
                </p>
                {/* <img src={berita1} alt="kesb" width="50%"/> */}
                <img src={berita11} alt="kesb" width="40%"/>
                <br/>
                <br/>
                </MDBContainer>
                <CaroCard/>
                <Footer/>
            </div>
        )
    }
}

export default Berita1
