import React, { Component } from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <MDBNavbar color="red darken-4" dark expand="md">
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav center>
          <MDBNavItem>
            <MDBNavLink to="/home"><strong>BERANDA</strong></MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/berita"><strong>BERITA</strong></MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline"><strong>PROFIL</strong></div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="/visi">Visi & Misi</MDBDropdownItem>
                <MDBDropdownItem href="/tupoksi">Tugas Pokok & Fungsi</MDBDropdownItem>
                <MDBDropdownItem href="/struktur">Struktur Organisasi</MDBDropdownItem>
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
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to="/regulasi"><strong>REGULASI</strong></MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline">PPID</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="/ppidberkala">INFORMASI YANG WAJIB DI UMUMKAN SECARA BERKALA</MDBDropdownItem>
                <MDBDropdownItem href="/ppidsetiapsaat">INFORMASI YANG WAJIB DI UMUMKAN SETIAP SAAT</MDBDropdownItem>
                <MDBDropdownItem href="/ppidsertamerta">INFORMASI YANG WAJIB DI UMUMKAN SERTA MERTA</MDBDropdownItem>
                <MDBDropdownItem href="/ppid">PERMOHONAN INFORMASI</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to="/pertanyaan"><strong>PERTANYAAN</strong></MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/download"><strong>UNDUHAN</strong></MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/galeri"><strong>GALERI</strong></MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/kontak"><strong>KONTAK</strong></MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default NavbarPage;