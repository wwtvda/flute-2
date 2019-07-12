import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from "mdbreact";
import "./ChatPage.css";

class ChatPage extends Component {
  constructor() {
    super();
    this.state = {
      friends: [
        {
          name: "John Doe",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-8",
          message: "Hello, Are you there?",
          when: "Just now",
          toRespond: 1,
          seen: false,
          active: true
        },
        {
          name: "Danny Smith",
          message: "Lorem ipsum dolor sit",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1",
          when: "5 min ago",
          toRespond: 0,
          seen: false,
          active: false
        },
        {
          name: "Alex Steward",
          message: "Lorem ipsum dolor sit",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-2",
          when: "Yesterday",
          toRespond: 0,
          seen: false,
          active: false
        },
        {
          name: "Ashley Olsen",
          message: "Lorem ipsum dolor sit",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-3",
          when: "Yesterday",
          toRespond: 0,
          seen: false,
          active: false
        },
        {
          name: "Kate Moss",
          message: "Lorem ipsum dolor sit",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-4",
          when: "Yesterday",
          toRespond: 0,
          seen: false,
          active: false
        },
        {
          name: "Lara Croft",
          message: "Lorem ipsum dolor sit",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5",
          when: "Yesterday",
          toRespond: 0,
          seen: false,
          active: false
        },
        {
          name: "Caroline Hapsari",
          message: "Selamat pagi Saya mahasiswa ugm akan melakukan penelitian ke magelang jateng, pihak lokasinpenelitian membutuhkan surat rekomendasi dari kesbangpol jateng melaluu kesbangpol DIY.mohon infonya apa yg harus saya persiapkan untuk mendapat surat rekomendasi dari kesbangpol DIY,terimakasih",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6",
          when: "5 min ago",
          toRespond: 0,
          seen: true,
          active: false
        }
      ],
      messages: [
        {
          author: "Caroline Hapsari",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6",
          when: "12 mins ago",
          message:
            "Selamat pagi Saya mahasiswa ugm akan melakukan penelitian ke magelang jateng, pihak lokasinpenelitian membutuhkan surat rekomendasi dari kesbangpol jateng melaluu kesbangpol DIY.mohon infonya apa yg harus saya persiapkan untuk mendapat surat rekomendasi dari kesbangpol DIY,terimakasih"
        },
        {
          author: "Admin Kesbangpol",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5",
          when: "13 mins ago",
          message:
            " Selamat Pagi, Mengenai surat keterangan penelitian berdasarkan Kemendagri Nomor 3. Tahun 2018 tentang Penerbitan Surat Keterangan Penelitian dalam rangka TA tidak perlu menggunakan Surat Keterangan Penelitian. Surat bisa langsung diajukan dari Kampus ke pimpinan instansi terkait untuk pengambilan data. Untuk surat edaran tentang Penerbitan Surat Keterangan Penelitian dari Gubernur DIY dan Peraturan Menteri Dalam Negeri dapat diunduh melalui tautan berikut: http://kesbangpol.jogjaprov.go.id/download/ Terima Kasih"
        },
        {
          author: "Edith Piaf",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6",
          when: "14 mins ago",
          message:
            "Selamat pagi bp/ibu, saya mahasiswa kuliah di jogja mau mengambil data penelitian untuk thesis di daerah Sumatera Barat, apakah saya harus mengurus surat izin ke kesbangpol DIY? Terimakasih"
        }
      ]
    };
  }

  render() {
    return (
      <MDBCard className="grey lighten-3 chat-room">
        <MDBCardBody>
          <MDBRow className="px-lg-2 px-2">
            <MDBCol md="6" xl="8" className="pl-md-3 px-lg-auto mt-2 mt-md-0">
              <MDBRow>
                <MDBListGroup className="list-unstyled pl-3">
                  {this.state.messages.map(message => (
                    <ChatMessage
                      key={message.author + message.when}
                      message={message}
                    />
                  ))}
                </MDBListGroup>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

const Friend = ({
  friend: { name, message, when, toRespond, seen, active }
}) => (
  <MDBListGroupItem
    href="#!"
    className="d-flex justify-content-between p-2 border-light"
    style={{ backgroundColor: active ? "#eeeeee" : "" }}
  >
    <div style={{ fontSize: "0.95rem" }}>
      <strong>{name}</strong>
      <p className="text-muted">{message}</p>
    </div>
    <div>
      <p className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>
        {when}
      </p>
      {seen ? (
        <span className="text-muted float-right">
          <MDBIcon className="fa-check" aria-hidden="true" />
        </span>
      ) : toRespond ? (
        <MDBBadge color="danger" className="float-right">
          {toRespond}
        </MDBBadge>
      ) : (
        <span className="text-muted float-right">
          <MDBIcon icon="reply" aria-hidden="true" />
        </span>
      )}
    </div>
  </MDBListGroupItem>
);

const ChatMessage = ({ message: { author, avatar, when, message } }) => (
  <li className="chat-message d-flex justify-content-between mb-4">
    <MDBCard>
      <MDBCardBody>
        <div>
          <strong className="primary-font">{author}</strong>
          <small className="pull-right text-muted">
            <i className="far fa-clock" /> {when}
          </small>
        </div>
        <hr />
        <p className="mb-0">{message}</p>
      </MDBCardBody>
    </MDBCard>
  </li>
);

export default ChatPage;