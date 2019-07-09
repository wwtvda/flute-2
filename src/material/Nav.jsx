import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "mdbreact";

export default () => (
  
  <BrowserRouter>
          <MDBNav color="red darken-4" className="font-weight-bold py-1 px-1 mb-4 justify-content-center">
            <MDBNavLink className="white-text" to="./home" >BERANDA</MDBNavLink>
            <MDBNavLink className="white-text" to="./berita">BERITA</MDBNavLink>
            <MDBDropdown>
            <MDBDropdownToggle nav caret className="white-text" >
                  <span className="white-text">PROFILE</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu background-color="red darken-1">
                  <MDBDropdownItem href="/visi">VISI & MISI</MDBDropdownItem>
                  <MDBDropdownItem href="/tugas">TUGAS POKOK & FUNGSI</MDBDropdownItem>
                  <MDBDropdownItem href="/struktur">STRUKTUR ORGANISASI</MDBDropdownItem>
                  <MDBDropdown dropright>
                  <MDBDropdownToggle nav caret className="black-text">
                  <span className="black-text">BIDANG</span>
                </MDBDropdownToggle>
                    <MDBDropdownMenu color="danger-color-dark">
                        <MDBDropdownItem href="/ideo">BIDANG BINA IDEOLOGI DAN KEWASPADAAN NASIONAL</MDBDropdownItem>
                        <MDBDropdownItem href="/ketahanan">BIDANG KETAHANAN SENI, BUDAYA, AGAMA DAN EKONOMI</MDBDropdownItem>
                        <MDBDropdownItem href="/politik">BIDANG POLITIK DALAM NEGERI DAN KEMASYARAKATAN</MDBDropdownItem>
                        <MDBDropdownItem href="/sekre">SEKRETARIAT</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBDropdownMenu>
            </MDBDropdown>
            <MDBNavLink className="white-text" to="/regulasi">REGULASI</MDBNavLink>
            <MDBDropdown color="red darken-1">
            <MDBDropdownToggle nav caret className="white-text">
                  <span className="white-text">PPID</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu >
                  <MDBDropdownItem href="/ppidberkala">INFORMASI YANG WAJIB DI UMUMKAN SECARA BERKALA</MDBDropdownItem>
                  <MDBDropdownItem href="/ppidsetiapsaat">INFORMASI YANG WAJIB DI UMUMKAN SETIAP SAAT</MDBDropdownItem>
                  <MDBDropdownItem href="/ppidsertamerta">INFORMASI YANG WAJIB DI UMUMKAN SERTA MERTA</MDBDropdownItem>
                  <MDBDropdownItem href="/ppid">PERMOHONAN INFORMASI</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
            <MDBNavLink className="white-text" to="#!">PERTANYAAN</MDBNavLink>
            <MDBNavLink className="white-text" to="/download">UNDUH</MDBNavLink>
            <MDBNavLink className="white-text" to="/galeri">GALERI</MDBNavLink>
            <MDBNavLink className="white-text" to="/kontak">KONTAK</MDBNavLink>
          </MDBNav>
  </BrowserRouter>
);
