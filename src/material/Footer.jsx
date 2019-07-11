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
            	<a href="/visi">VISI MISI</a>
          	</li>
          	<li className="list-unstyled">
            	<a href="/tugas">TUGAS POKOK & Fungsi</a>
          	</li>
          	<li className="list-unstyled">
            	<a href="/struktur">STRUKTUR ORGANISASI</a>
          	</li>
			<li className="list-unstyled"><a href="/ideo">BIDANG IDEOLOGI DAN KEWASPADAAN NASIONAL</a></li>
			<li className="list-unstyled"><a href="/ideo">BIDANG KETAHANAN SENI, BUDAYA, AGAMA DAN EKONOMI</a></li>
			<li className="list-unstyled"><a href="/ideo">BIDANG POLITIK DALAM NEGERI DAN KEMASYARAKATAN</a></li>
        	</ul>
      	</MDBCol>
      	<MDBCol md="3">
        	<ul>
        	<h7 className="title"><strong>PPDI PEMBANTU</strong></h7>
          	<li className="list-unstyled">
            	<a href="/ppidberkala">INFORMASI BERKALA</a>
          	</li>
          	<li className="list-unstyled">
            	<a href="/ppidsetiapsaat">INFORMASI SETIAP SAAT</a>
          	</li>
          	<li className="list-unstyled">
            	<a href="/ppidsertamerta">INFORMASI SERTA MERTA</a>
          	</li>
          	<li className="list-unstyled">
            	<a href="/ppid">PERMOHONAN</a>
          	</li>
        	</ul>
      	</MDBCol>
      	<MDBCol md="2">
        	<ul>
        	<h8 className="title"><strong>KONTAK</strong></h8>
          	<li className="list-unstyled">
            	<a href="/kontak">ALAMAT</a>
          	</li>
          	<li className="list-unstyled">
            	TELP : 0274 551136/551137
          	</li>
          	<li className="list-unstyled">
            	EMAIL : 
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