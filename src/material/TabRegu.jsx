import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

const TablePage = (props) => {
  const columns= [
    {
      label: 'No',
      field: 'id',
      sort: 'asc'
    },
    {
      label: 'Judul',
      field: 'judul',
      sort: 'asc'
    },
    {
      label: 'Kategori',
      field: 'ktgr',
      sort: 'asc'
    },
    {
      label: 'Download',
      field: 'handle',
      sort: 'asc'
    }
  ];

  const rows_outline_btn = [
    {
      'id': 1,
      'judul': 'Renstra Perubahan Badan Kesbangpol DIY 2017-2022',
      'ktgr': 'Politik',
      'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
      'id': 2,
      'judul': 'Perdais DIY No 1 Tahun 2018 - Kelembagaan Pemda DIY',
      'ktgr': 'Politik',
      'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
      'id': 3,
      'judul': '	Peraturan Gubernur DIY No 79 Tahun 2018 tentang Kedudukan, Susunan Organisasi, Tugas, Fungsi Kesbang',
      'ktgr': 'Politik',
      'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
        'id': 4,
        'judul': 'Keputusan KPU RI Nomor 277/PL.01.3-Kpt/06/KPU/IV/2018 tanggal 4 April 2018 tentang Penetapan Daerah',
        'ktgr': 'Politik',
        'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
        'id': 5,
        'judul': 'Peraturan Komisi Pemilihan Umum nomor 5 tahun 2018 perubahan atas peraturan komisi pemilihan umum',
        'ktgr': 'Politik',
        'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
        'id': 6,
        'judul': 'Peraturan KPU Nomor 7 Tahun 2017 tentang Tahapan Pemilihan Umum',
        'ktgr': 'Politik',
        'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
        'id': 7,
        'judul': 'DRAF RENSTRA 2018-2020',
        'ktgr': 'Politik',
        'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
        'id': 8,
        'judul': 'UNDANG-UNDANG REPUBLIK INDONESIA NOMOR 35 TAHUN 2009 TENTANG NARKOTIKA',
        'ktgr': 'Politik',
        'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
        'id': 9,
        'judul': 'PERATURAN GUBERNUR DAERAH ISTIMEWA YOGYAKARTA NOMOR 20 TAHUN 2014 TENTANG PENEGAKAN PERATURAN DAERAH',
        'ktgr': 'Politik',
        'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
        'id': 10,
        'judul': 'PERUBAHAN KEDUA ATAS PERATURAN MENTERI DALAM NEGERI REPUBLIK INDONESIA NOMOR 32 TAHUN 2011',
        'ktgr': 'Politik',
        'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    }
  ];

  return(
    <MDBTable btn>
      <MDBTableHead columns={columns} />
      <MDBTableBody rows={rows_outline_btn} />
    </MDBTable>
  );
};

export default TablePage;