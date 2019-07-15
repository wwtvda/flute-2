import React from "react";
import { MDBContainer, MDBIcon, MDBMedia } from "mdbreact";
import Carol from './img/kesb.png'
import Tania from './img/tanya.png'

const BlogComponentsPage = () => {
  return (
      <MDBContainer>
        <MDBMedia className="d-block d-md-flex mt-4">
          <img className="card-img-64 d-flex mx-auto mb-3" src={Tania} alt="" />
          <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
            <h5 className="font-weight-bold mt-0">
              Caroline Hapsari
            </h5>
            Selamat pagi Saya mahasiswa ugm akan melakukan penelitian ke magelang jateng, pihak lokasi penelitian membutuhkan surat rekomendasi
            dari kesbangpol jateng melaluu kesbangpol DIY.mohon infonya apa yg harus saya persiapkan untuk mendapat surat rekomendasi dari kesbangpol DIY,terimakasih
            <MDBMedia className="d-block d-md-flex mt-4">
          <img className="card-img-64 d-flex mx-auto mb-3" src={Carol} alt="Pemprov" />
              <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                  <h5 className="font-weight-bold mt-0">
                  KESBANGPOL DIY<MDBIcon icon="reply" className="pull-right ml-2" />
                  </h5>
                  Selamat Pagi,
                  Mengenai surat keterangan penelitian berdasarkan Kemendagri Nomor 3. Tahun 2018 tentang Penerbitan Surat Keterangan Penelitian dalam rangka TA tidak perlu menggunakan
                  Surat Keterangan Penelitian. Surat bisa langsung diajukan dari Kampus ke pimpinan instansi terkait untuk pengambilan data.
                  Untuk surat edaran tentang Penerbitan Surat Keterangan Penelitian dari Gubernur DIY dan Peraturan Menteri Dalam Negeri dapat diunduh melalui tautan berikut:
                  http://kesbangpol.jogjaprov.go.id/download/
                  Terima Kasih
              </MDBMedia>
            </MDBMedia>
          </MDBMedia>
        </MDBMedia>
        <MDBMedia className="d-block d-md-flex mt-4">
          <img className="card-img-64 d-flex mx-auto mb-3" src={Tania} alt="" />
          <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
            <h5 className="font-weight-bold mt-0">
              Alifa Ayu
            </h5>
            Selamat pagi, saya mahasiswa S3 (KTP: jawa barat) yang sedang nempuh studi di luar negeri. Saya berencana untuk melakukan penelitian di puskesmas dan
            rsj di DIY Yogyakarta. Rencananya saya akan mengajukan kerjasama dengan UGM untuk penelitian disertasi saya ini. Saat ini saya sedang tidak berada di Indonesia,
            lalu bagaimana mekanisme untuk mengurus surat izin penelitian S3 saya ini? Apakah hanya perlu mengurus surat izin penelitian di kesbangpol saja atau bagaimana?
            Apakah bisa diwakilkan untuk pengurusan surat izin penelitian dan jika iya dokumen apa saja yang harus diberikan?
            <MDBMedia className="d-block d-md-flex mt-4">
          <img className="card-img-64 d-flex mx-auto mb-3" src={Carol} alt="Pemprov" />
              <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                  <h5 className="font-weight-bold mt-0">
                  KESBANGPOL DIY<MDBIcon icon="reply" className="pull-right ml-2" />
                  </h5>
                  Selamat pagi.
                  Berikut persyaratan untuk permohonan SKP (Surat Keterangan Penelitian):
                  <ul>
                    <li>Pas Foto 4 x 6 = 3 lembar</li>
                    <li>Fotokopi KTP/SIM peneliti</li>
                    <li>Fotokopi KTM (untuk mahasiswa)</li>
                    <li>Surat Pengantar/Rekomendasi dari Institusi asal peneliti</li>
                    <li>Proposal penelitian (dijilid dan sudah disahkan)</li>
                  </ul>
                  Jika peneliti tidak dapat datang langsung ke Badan Kesbangpol DIY, maka pengajuan permohonan
                  SKP (Surat Keterangan Penelitian) dapat dikuasakan dengan melampirkan surat kuasa bermaterai
                  dan fotokopi identitas yang diberi kuasa.
                  Terima kasih.
              </MDBMedia>
            </MDBMedia>
          </MDBMedia>
        </MDBMedia>
        <MDBMedia className="d-block d-md-flex mt-4">
          <img className="card-img-64 d-flex mx-auto mb-3" src={Tania} alt="" />
          <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
            <h5 className="font-weight-bold mt-0">
              Rizky Satriadi
            </h5>
            Selamat malam admin, untuk hasil penelitian yang dimaksud skripsikan? Tapi kalau
            sampai saat ini skripsi saya belum di acc lalu bagaimana hasil penelitian yang dikumpulkan?
            <MDBMedia className="d-block d-md-flex mt-4">
          <img className="card-img-64 d-flex mx-auto mb-3" src={Carol} alt="Pemprov" />
              <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                  <h5 className="font-weight-bold mt-0">
                  KESBANGPOL DIY<MDBIcon icon="reply" className="pull-right ml-2" />
                  </h5>
                  Selamat pagi.
                  Untuk hasil penelitian yang diserahkan ke Badan Kesbangpol DIY merupakan hasil penelitian
                  yang sudah final (sudah direvisi dan sudah mendapat tanda tangan dari pihak perguruan tinggi).
                  Terima kasih.
              </MDBMedia>
            </MDBMedia>
          </MDBMedia>
        </MDBMedia>
      </MDBContainer>
  );
}

export default BlogComponentsPage;