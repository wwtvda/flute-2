import React, { Component } from 'react'
import ReactDOM from 'react-dom';
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
import Pagination from './material/Pagination';
import Card from './material/Card';
import Nav from './material/Nav';

export class Berita extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Nav/>
                <h1>Berita</h1><hr/>
                <Card/>
                <Pagination/>
                <Footer/>
            </div>
        )
    }
}

export default Berita
