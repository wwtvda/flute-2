import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {MDBContainer} from 'mdbreact'


/*Halaman*/
import Berita from './Berita';

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
import Form from './material/Formppid';
import Down from './material/TabDown';


export class Home extends Component {
  render() {
  return (
    <div>
         <Router>
            <div>
            {/* <Route exact path="/" component={App} /> */}
            <Route path="./Berita" component={Berita} />
            </div>
          </Router>
      <Navbar/>
      <Nav/>
      <Jumbotron/>
      <Carousel/>
      <br/>
      <Header/>
      <Pengu/>
      <CaroCard/>
      <Gambar/>
      <Pagination/>
      <div>
    <h1>Berita</h1>
    <hr></hr>
    </div>
      <Card/>
      <Pagination/>
      <MDBContainer>
        <Down/>
      </MDBContainer>
      <Form/>
      <Footer/>
    </div>
    );
  }
}

export default Home;
