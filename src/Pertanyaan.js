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
import { MDBContainer } from 'mdbreact'
import Chat from './material/Comment'
import Pagination from './material/Pagination';
import FormPerta from './material/FormPerta'

export class Pertanyaan extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <br/>
                <MDBContainer>
                    <h1>PERTANYAAN</h1><hr/>
                    <p>Anda dapat menanyakan kepada kami melalui form tanya jawab di halaman ini.</p>
                    <Chat/>
                    <br/>
                    <Pagination/>
                    <h2>Form Pertanyaan</h2>
                    <FormPerta/>
                </MDBContainer>
                <br/><br/>
                <CaroCard/>
                <Footer/>
            </div>
        )
    }
}

export default Pertanyaan
