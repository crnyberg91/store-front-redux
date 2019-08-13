import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = (props) => {
  return (
    <MDBCol className="card">
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText>
            {props.desc}
          </MDBCardText>
          <MDBBtn href="#">{props.btn}</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;