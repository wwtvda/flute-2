import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "mdbreact";

export default () => (
  <BrowserRouter>
          <MDBNav color="red darken-4" className="font-weight-bold py-1 px-1 mb-4 justify-content-center">
            <MDBNavLink className="white-text" active to="#!">BERANDA</MDBNavLink>
            <MDBNavLink className="white-text" to="#!">BERITA</MDBNavLink>
            <MDBDropdown>
            <MDBDropdownToggle nav caret className="white-text" >
                  <span className="white-text">PROFILE</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu background-color="red darken-1">
                  <MDBDropdownItem href="#!">VISI & MISI</MDBDropdownItem>
                  <MDBDropdownItem href="#!">TUGAS POKOK & FUNGSI</MDBDropdownItem>
                  <MDBDropdownItem href="#!">STRUKTUR ORGANISASI</MDBDropdownItem>
                  <MDBDropdown dropright>
                  <MDBDropdownToggle nav caret className="black-text">
                  <span className="black-text">BIDANG</span>
                </MDBDropdownToggle>
                    <MDBDropdownMenu color="danger-color-dark">
                        <MDBDropdownItem href="#!">BIDANG BINA IDEOLOGI DAN KEWASPADAAN NASIONAL</MDBDropdownItem>
                        <MDBDropdownItem href="#!">BIDANG KETAHANAN SENI, BUDAYA, AGAMA DAN EKONOMI</MDBDropdownItem>
                        <MDBDropdownItem href="#!">BIDANG POLITIK DALAM NEGERI DAN KEMASYARAKATAN</MDBDropdownItem>
                        <MDBDropdownItem href="#!">SEKRETARIAT</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBDropdownMenu>
            </MDBDropdown>
            <MDBNavLink className="white-text" to="#!">REGULASI</MDBNavLink>
            <MDBDropdown color="red darken-1">
            <MDBDropdownToggle nav caret className="white-text">
                  <span className="white-text">PPID</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu >
                  <MDBDropdownItem href="#!">INFORMASI YANG WAJIB DI UMUMKAN SECARA BERKALA</MDBDropdownItem>
                  <MDBDropdownItem href="#!">INFORMASI YANG WAJIB DI UMUMKAN SETIAP SAAT</MDBDropdownItem>
                  <MDBDropdownItem href="#!">INFORMASI YANG WAJIB DI UMUMKAN SERTA MERTA</MDBDropdownItem>
                  <MDBDropdownItem href="#!">PERMOHONAN INFORMASI</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
            <MDBNavLink className="white-text" to="#!">PERTANYAAN</MDBNavLink>
            <MDBNavLink className="white-text" to="#!">UNDUH</MDBNavLink>
            <MDBNavLink className="white-text" to="#!">GALERI</MDBNavLink>
            <MDBNavLink className="white-text" to="#!">KONTAK</MDBNavLink>
            
          </MDBNav>
  </BrowserRouter>
);
