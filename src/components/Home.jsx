import React from "react";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <MDBBtn floating size='lg' tag='a'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>
      <MDBBtn className='mx-2' tag='a' color='success' outline floating>
        <MDBIcon fas icon='star' />
      </MDBBtn>
      <MDBBtn color='danger' tag='a' floating>
        <MDBIcon fas icon='magic' />
      </MDBBtn>
      <MDBBtn className='ms-2' tag='a' color='dark' floating>
        <MDBIcon fab icon='apple' />
      </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;