import React, { Component } from 'react'
import {MDBContainer} from 'mdbreact'
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

export class PpidBerkala extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <br/>
                <MDBContainer>
                <h1>
                INFORMASI YANG WAJIB DIUMUMKAN SECARA BERKALA
                </h1>
                <hr/>
                <p>Informasi akan diumumkan secara berkala</p>
                <br/><br/><br/>
                </MDBContainer>
                <CaroCard/>
                <Footer/>
            </div>
        )
    }
}

export default PpidBerkala
