import React from 'react';

export const Home = () => {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img className="d-block w-100" height="600" src="https://images.alphacoders.com/133/1338482.png" alt="First slide" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img className="d-block w-100" height="600" src="https://images8.alphacoders.com/396/thumbbig-396345.webp" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" height="600" src="https://images.alphacoders.com/768/thumbbig-76821.webp" alt="Third slide" />
          </div>
        </div>
        <button className="carousel-control-prev" data-bs-target="#carouselExampleControls" type="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" data-bs-target="#carouselExampleControls" type="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              src="https://img.freepik.com/free-photo/delicious-cake-with-fruits_23-2150727658.jpg"
              className="img-fluid mx-auto d-block"
              alt="Cake"
            />
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center">
            <p
              className="custom-text text-center text-md-left"
              style={{ color: 'cadetblue', fontSize: 'larger', fontFamily: 'cursive', marginTop: '10%' }}
            >
              Classic is the best place to order birthday <br />
              cakes online in Coimbatore offering different <br />
              flavors, designs, and sizes at an affordable price.<br />
              Our birthday cakes are customized, freshly made, and <br />
              delivered to your doorstep within 3 hours.<br />
              We are an FSSAI-certified online shop that offers<br />
              a huge collection of lip-smacking birthday cakes<br />
              including eggless cakes, chocolate cakes, strawberry cakes,<br />
              black forest, white forest cakes, red velvet, truffle cakes, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
