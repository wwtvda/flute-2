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
import { MDBContainer } from 'mdbreact'

export class Visi extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <br/>
                <MDBContainer>
                <h1>VISI & MISI</h1><hr/>
                <h2>Visi</h2>
                <p>Terwujudnya hubungan sinergis dan dinamis yang lebih berkarakter antara pemerintah, pelaku politik, ormas bagi ketahanan wilayah Daerah Istimewa Yogyakarta dalam menyongsong peradaban baru.</p>
                <h2>Misi</h2>
                <p>Meningkatkan hubungan yang sinergis antara Pemerintah, pelaku Politik dan Organisasi Kemasyarakatan, di bidang kesatuan bangsa dalam bina idiologi, wawasan kebangsaan, kewaspadaan nasional, politik dalam negeri, ketahanan seni budaya, agama, ketahanan ekonomi, politik, ketentraman, ketertiban dan keamanan.</p>
                </MDBContainer>
                <br/>
                <CaroCard/>
                <Footer/>
            </div>
        )
    }
}

export default Visi
