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
      'judul': 'Prosedur Mendapatkan Surat Keterangan Bagi Partai Politik Sebagai Kelengkapan Persyaratan Verifikasi Untuk Menjadi Badan Hukum',
      'ktgr': 'Umum',
      'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
      'id': 2,
      'judul': 'Form Surat Pernyataan Bebas Narkoba',
      'ktgr': 'Umum',
      'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
      'id': 3,
      'judul': 'Jadwal Penerimaan Berkas Permohonan Rekomendasi Penelitian',
      'ktgr': 'Umum',
      'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
        'id': 4,
        'judul': 'Persyaratan Permohonan Surat Rekomendasi Penelitian',
        'ktgr': 'Umum',
        'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
        'id': 5,
        'judul': 'PERATURAN MENTERI DALAM NEGERI REPUBLIK INDONESIA NOMOR 3 TAHUN 2018 TENTANG PENERBITAN SURAT KETERANGAN PENELITIAN',
        'ktgr': 'Undang-undang',
        'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
        'id': 6,
        'judul': 'Materi Sosialisasi Kepemiluan - BANTUL',
        'ktgr': 'Umum',
        'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
        'id': 7,
        'judul': 'Materi Sosialisasi Kepemiluan - SLEMAN',
        'ktgr': 'Umum',
        'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
        'id': 8,
        'judul': 'SURAT EDARAN GUBERNUR DIY NOMOR: 070/012 18 TENTANG PENERBITAN SURAT KETERANGAN PENELITIAN',
        'ktgr': 'Umum',
        'handle': <MDBBtn color="danger" outline size="sm">Download</MDBBtn>
    },
    {
        'id': 9,
        'judul': 'INFORMASI LAYANAN PENERBITAN SURAT KETERANGAN PENELITIAN',
        'ktgr': 'Umum',
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