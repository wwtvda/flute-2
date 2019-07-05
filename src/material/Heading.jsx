import React from "react";
import { MDBBadge, MDBContainer } from "mdbreact";

const BadgePage = props => {
return (
<MDBContainer>
    <br/>
  <h1>Pengumuman <MDBBadge color="primary">New</MDBBadge>
  </h1><br/>
</MDBContainer>
);
};

export default BadgePage;