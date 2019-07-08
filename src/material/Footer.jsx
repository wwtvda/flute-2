import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';

const FooterPage = () => {
  return (
	<MDBFooter color="danger-color-dark" className="font-small pt-4 mt-4">
  	<MDBContainer fluid className="text-center text-md-left">
    	<MDBRow>
    	<MDBCol md="0">
          	<img alt="logo" height="100px" width="75px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Yogyakarta_Logo.svg/357px-Yogyakarta_Logo.svg.png"/>
      	</MDBCol>
      	<MDBCol md="3">
      	<p>Pemerintah Daerah Istimewa Yogyakarta </p>
        	<h5 className="title">BADAN KESATUAN BANGSA DAN POLITIK</h5>
        	<p>Jalan Tentara Rakyat Mataram Nomor 53 (Selatan Universitas Janabadra), Kota Yogyakarta </p>
        	
      	</MDBCol>
      	<MDBCol md="3">
        	<ul>
        	<h7 className="title"><strong>TENTANG KESBANGPOL</strong></h7>
          	<li className="list-unstyled">
            	<a href="#!">VISI MISI</a>
          	</li>
          	<li className="list-unstyled">
            	<a href="#!">TUGAS</a>
          	</li>
          	<li className="list-unstyled">
            	<a href="#!">STRUKTUR</a>
          	</li>
          	<li className="list-unstyled">
            	<a href="#!">BIDANG</a>
          	</li>
        	</ul>
      	</MDBCol>
      	<MDBCol md="3">
        	<ul>
        	<h7 className="title"><strong>PPDI PEMBANTU</strong></h7>
          	<li className="list-unstyled">
            	<a href="#!">INFORMASI BERKALA</a>
          	</li>
          	<li className="list-unstyled">
            	<a href="#!">INFORMASI SETIAP SAAT</a>
          	</li>
          	<li className="list-unstyled">
            	<a href="#!">INFORMASI SERTA MERTA</a>
          	</li>
          	<li className="list-unstyled">
            	<a href="#!">PERMOHONAN</a>
          	</li>
        	</ul>
      	</MDBCol>
      	<MDBCol md="2">
        	<ul>
        	<h8 className="title"><strong>KONTAK</strong></h8>
          	<li className="list-unstyled">
            	<a href="#!">MAPS</a>
          	</li>
          	<li className="list-unstyled">
            	<a href="#!">TELP</a>
          	</li>
          	<li className="list-unstyled">
            	<a href="#!">EMAIL</a>
          	</li>
        	</ul>
      	</MDBCol>
    	</MDBRow>
  	</MDBContainer>
  	<div className="footer-copyright text-center py-3">
    	<MDBContainer fluid>
      	<a href="/"> COPYRIGHT © 2019KESBANGPOL DAERAH ISTIMEWA YOGYAKARTA. ALL RIGHT RESERVED</a>
    	</MDBContainer>
  	</div>
	</MDBFooter>
  );
}

export default FooterPage