import React, { Component } from 'react';
import {MDBContainer} from "mdbreact";
/*css*/
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
/* Material */
import Navbar from './material/Navbar';
import Footer from './material/Footer';
import Gambar from './material/Gambar';
import Pagination from './material/Pagination';
import Nav from './material/NaviBar';
import CaroCard from './material/CaroCard';

export class Galeri extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <br/>
                <MDBContainer>
                <h1>Galeri</h1><hr/>
                <Gambar/>
                </MDBContainer>
                <Pagination/>
                <br/><br/>
                <CaroCard/>
                <Footer/>
            </div>
        )
    }
}

export default Galeri
