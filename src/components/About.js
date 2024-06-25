import React from 'react';
// import { Gallery } from './Gallery';

export const About = () => {
  return (
    <>
    <br/>
    <center>
      <div 
        className="card" 
        id="about" 
        style={{
          width: '700px',
          height: '500px',
          backgroundImage: 'url("https://images.pexels.com/photos/1998632/pexels-photo-1998632.jpeg?auto=compress&cs=tinysrgb&w=600")'
        }}
      >
        <div className="card-body">
          <h2 
            className="card-title" 
            style={{
              marginTop: '5%',
              fontSize: 'xx-large',
              fontWeight: 900,
              fontFamily: 'cursive',
              color: 'rgb(85, 43, 61)'
            }}
          >
            About Us
          </h2>
          <p 
            className="card-text" 
            style={{
              marginTop: '5%',
              color: 'rgb(17, 17, 16)',
              fontWeight: 600
            }}
          >
            Welcome to Cake's Sake, your reliable Melbourne Cake Delivery service.<br />
            We are the perfect blend of youthful dynamism and a firm commitment<br />
            to delivering quality, taste, and customer satisfaction since our<br />
            inception in 2022. This unique balance sets us apart in the bustling<br />
            culinary scene of Melbourne.<br /><br />
            
            At Cake's Sake, we believe that every cake we create should be<br />
            as delightful to behold as it is to taste. We’re not<br />
            just in the business of delivering cakes but in the<br />
            business of delivering happiness, transforming every<br />
            occasion into a memorable experience. We put our heart<br />
            and soul into creating cakes that will bring smiles and<br />
            joy to your celebrations.
          </p>
        </div>
      </div>
    </center>
    
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2 style={{ fontFamily: 'cursive', color: 'rgb(85, 43, 61)', fontWeight: 900 }}>Our Promise</h2>
   </div>
   
   <div className='row'>
  <div className='col-md-3 text-center d-flex flex-column align-items-center'>
    <img src="https://theobroma.in/cdn/shop/files/icon1.jpg?v=1615448111" height={50} width={50} />
    <h5 style={{ fontFamily: 'cursive', color: 'rgb(85, 43, 61)', fontWeight: 600 }}>AUTHENTIC RECIPES</h5>
    <p style={{fontFamily:'fantasy',color:'black',fontWeight:500 }}>Our products are based on traditional home-style recipes, using fresh ingredients.</p>
  </div>
  <div className='col-md-3 text-center d-flex flex-column align-items-center'>
    <img src="https://theobroma.in/cdn/shop/files/icon2.jpg?v=1615448111" height={50} width={50} />
    <h5 style={{ fontFamily: 'cursive', color: 'rgb(85, 43, 61)', fontWeight: 600 }}>BAKED WITH LOVE</h5>
    <p style={{fontFamily:'fantasy',color:'black',fontWeight:500}}>Our passion for baking is poured into every recipe, serving smiles on a plate everyday.</p>
  </div>
  <div className='col-md-3 text-center d-flex flex-column align-items-center'>
    <img src="https://theobroma.in/cdn/shop/files/icon3.jpg?v=1615448111" height={50} width={50} />
    <h5 style={{ fontFamily: 'cursive', color: 'rgb(85, 43, 61)', fontWeight: 600 }}>HONESTLY PRICED</h5>
    <p style={{fontFamily:'fantasy',color:'black',fontWeight:500}}>We constantly strive to offer the best products at the right prices.</p>
  </div>
  <div className='col-md-3 text-center d-flex flex-column align-items-center'>
    <img src="https://theobroma.in/cdn/shop/files/icon4.jpg?v=1615448111" height={50} width={50} />
    <h5 style={{ fontFamily: 'cursive', color: 'rgb(85, 43, 61)', fontWeight: 600 }}>COMMITTED TO QUALITY</h5>
    <p style={{fontFamily:'fantasy',color:'black',fontWeight:500}}>From our ingredients to our kitchen operations & guest services, we always prioritize quality.</p>
  </div>
</div>
    </>
  );
}
