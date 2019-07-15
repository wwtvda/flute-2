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
import Nav from './material/NaviBar'
import A1 from './material/img/a1.jpg'
import {MDBContainer} from 'mdbreact'

export class Berita1 extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <MDBContainer><br/>
                <h1>Pemantauan Tenaga Kerja Asing Oleh Pemda DIY</h1><hr/>
                <img src={A1} alt="Asmara"/>
                <p className="text-justify">Pada hari Rabu tanggal 19 Juni 2019  dimulai pukul 08.30 dan berakhir pada pukul  12.00 WIB, telah dilaksanakan  kegiatan Pemantauan Orang Asing oleh TIM POA Pemda  DIY dengan  melibatkan personil  dari Polda DIY, Korem 072/Pamungkas, Kemenkumham DIY, Kanwil Kemenag DIY, Kantor Imigrasi Kelas I Yogyakarta, Kejati DIY, intel Lanud Adisucipto Yogyakarta, Lanal Yogyakarta, Binda DIY, LLDikti Yogyakarta, Disnakertrans DIY, Disdikpora DIY, Dinas Pariwisata DIY, Biro Tapem Setda DIY, Kantor P2TSP DIY, dan Kesbangpol DIY sebagai penanggungjawab kegiatan.
                Kegiatan diawali dengan koordinasi Tim POA dan  arahan dari pimpinan Kesbangpol DIY.
                Sedangkan lokasi kegiatan pemantauan yaitu PT Liuhe Food Indonesia, Boshe VVIP Club, Liquid Café, Massimo Gelato, PT Rajawali Indonesia. PSIM Yogyakarta,dan CV Nusa Citra Mandiri.
                Dari hasil Pemantauan, beberapa tenaga kerja asing telah melakukan prosedur  perijinan, dan memiliki surat-surat  kelengkapan keimigrasian  yang berlaku, tetapi ada juga beberapa hal yang harus segera ditindaklanjuti  oleh instansi yang berkaitan  dengan ketenagakerjaan.
                </p>
                <img src="http://kesbangpol.jogjaprov.go.id/view_image/images/1561613192_22.jpg" alt="kesb" width="50%"/>
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
