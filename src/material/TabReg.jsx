import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBBtn } from "mdbreact";


const BasicTable = props => {
  return (
    <MDBTable>
      <MDBTableHead color="red darken-1" textWhite>
        <tr>
          <th>No</th>
          <th>Judul</th>
          <th>Kategori Regulasi</th>
          <th>Download</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Renstra Perubahan Badan Kesbangpol DIY 2017-2022</td>
          <td>Politik</td>
          <td><MDBBtn outline color="danger">Download</MDBBtn></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Perdais DIY No 1 Tahun 2018 - Kelembagaan Pemda DIY</td>
          <td>Politik</td>
          <td><MDBBtn outline color="danger">Download</MDBBtn></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Peraturan Gubernur DIY No 79 Tahun 2018 tentang Kedudukan, Susunan Organisasi, Tugas, Fungsi Kesbang</td>
          <td>Politik</td>
          <td><MDBBtn outline color="danger">Download</MDBBtn></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Keputusan KPU RI Nomor 277/PL.01.3-Kpt/06/KPU/IV/2018 tanggal 4 April 2018 tentang Penetapan Daerah</td>
          <td>Politik</td>
          <td><MDBBtn outline color="danger">Download</MDBBtn></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Peraturan Komisi Pemilihan Umum nomor 5 tahun 2018 perubahan atas peraturan komisi pemilihan umum no</td>
          <td>Politik</td>
          <td><MDBBtn outline color="danger">Download</MDBBtn></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Peraturan KPU Nomor 7 Tahun 2017 tentang Tahapan Pemilihan Umum</td>
          <td>Politik</td>
          <td><MDBBtn outline color="danger">Download</MDBBtn></td>
        </tr>
        <tr>
          <td>7</td>
          <td>DRAF RENSTRA 2018-2020</td>
          <td>Politik</td>
          <td><MDBBtn outline color="danger">Download</MDBBtn></td>
        </tr>
        <tr>
          <td>8</td>
          <td>UNDANG-UNDANG REPUBLIK INDONESIA NOMOR 35 TAHUN 2009 TENTANG NARKOTIKA</td>
          <td>Politik</td>
          <td><MDBBtn outline color="danger">Download</MDBBtn></td>
        </tr>
        <tr>
          <td>9</td>
          <td>PERATURAN GUBERNUR DAERAH ISTIMEWA YOGYAKARTA NOMOR 20 TAHUN 2014 TENTANG PENEGAKAN PERATURAN DAERAH</td>
          <td>Politik</td>
          <td><MDBBtn outline color="danger">Download</MDBBtn></td>
        </tr>
        <tr>
          <td>10</td>
          <td>PERUBAHAN KEDUA ATAS PERATURAN MENTERI DALAM NEGERI REPUBLIK INDONESIA NOMOR 32 TAHUN 2011</td>
          <td>Politik</td>
          <td><MDBBtn outline color="danger">Download</MDBBtn></td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default BasicTable;