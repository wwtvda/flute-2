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
import Ppi from './material/Formppid';
import {MDBContainer } from 'mdbreact';

export class Ppid extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <br/>
                <MDBContainer>
                <h1>PERMOHONAN INFORMASI</h1><hr/>
                <p>Dalam memberikan pelayanan Informasi Publik sebagaimana diamanatkan dalam Undang-Undang Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik, Kami ingin ikut serta di dalam memberikan informasi secara publik, informasi-informasi tersebut dapat didownload dan dipergunakan sesuai dengan kebutuhan publik. Apabila Informasi tersebut tidak ditemukan, maka informasi tersebut dapat diminta dengan mengisi form di bawah ini</p>
                <Ppi/>
                <br/>
                </MDBContainer>
                <br/><br/>
                <CaroCard/>
                <Footer/>
            </div>
        )
    }
}

export default Ppid
