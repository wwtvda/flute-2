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
import Reg from './material/TabRegu'
import Footer from './material/Footer';
import Nav from './material/NaviBar';
import {MDBContainer } from 'mdbreact';
import Pagination from './material/Pagination';

export class Regulasi extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <br/>
                <MDBContainer>
                    <h1>Regulasi</h1><hr/>
                    <Reg/>
                </MDBContainer>
                <br/>
                <Pagination/>
                <CaroCard/>
                <Footer/>
            </div>
        )
    }
}

export default Regulasi
