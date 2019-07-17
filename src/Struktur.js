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

export class Struktur extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <br/>
                <MDBContainer>
                <h1>Struktur Organisasi</h1><hr/>
                
                <img src="http://kesbangpol.jogjaprov.go.id/view_image/images/1550475653_Capture.PNG" alt="struktur"></img>
                </MDBContainer>
                <br/><br/>
                <CaroCard/>
                <Footer/>
            </div>
        )
    }
}

export default Struktur
