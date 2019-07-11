import React, { Component } from 'react'
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
import Pagination from './material/Pagination';
import Card from './material/Card';
import Nav from './material/NaviBar';

export class Berita extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <br/>
                <MDBContainer>
                <h1>Berita</h1><hr/>
                <Card/><br/>
                <Pagination/>
                </MDBContainer>
                <Footer/>
            </div>
        )
    }
}

export default Berita
