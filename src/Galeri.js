import React, { Component } from 'react'
/*css*/
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
/* Material */
import Jumbotron from './material/Jumbotron';
import Navbar from './material/Navbar';
import Carousel from './material/Carousel';
import Header from './material/Heading';
import Pengu from './material/Pengu';
import CaroCard from './material/CaroCard';
import Footer from './material/Footer';
import Gambar from './material/Gambar';
import Pagination from './material/Pagination';
import Card from './material/Card';
import Nav from './material/Nav';

export class Galeri extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <h1>Galeri</h1><hr/>
                <Gambar/>
                <Pagination/>
                <Footer/>
            </div>
        )
    }
}

export default Galeri