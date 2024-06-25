import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Box } from '@mui/material';

const products = [
  {
    img: 'https://www.cakebuzz.co.in/wp-content/uploads/2017/06/Black-Forest-Redefined-300x300.jpg',
    name: 'Black Forest Redefined',
    price: '₹20',
    description: 'A classic Black Forest cake redefined with rich flavors and ingredients.'
  },
  {
    img: 'https://www.cakebuzz.co.in/wp-content/uploads/2022/06/Black-forest-choco-chip-cake-300x300.jpg',
    name: 'Black Forest Choco Chip',
    price: '₹22',
    description: 'A delightful combination of Black Forest and Choco Chips.'
  },
  {
    img: 'https://www.cakebuzz.co.in/wp-content/uploads/2022/06/Black-Forest-Chocolate-Cake-300x300.jpg',
    name: 'Black Forest Chocolate',
    price: '₹25',
    description: 'Rich Black Forest cake with a smooth chocolate twist.'
  },
  {
    img: 'https://www.cakebuzz.co.in/wp-content/uploads/2023/08/BLACK-CURRANT-300x300.jpg',
    name: 'Black Currant',
    price: '₹18',
    description: 'A refreshing Black Currant cake for all occasions.'
  },
  {
    img: 'https://www.cakebuzz.co.in/wp-content/uploads/2023/08/MANGO-LOVE-300x300.jpg',
    name: 'Mango Love',
    price: '₹20',
    description: 'A tropical Mango cake that brings the love of mangoes to your plate.'
  },
  {
    img: 'https://www.cakebuzz.co.in/wp-content/uploads/2023/08/Choco-Vanilla-300x300.webp',
    name: 'Choco Vanilla',
    price: '₹23',
    description: 'A perfect blend of chocolate and vanilla in one cake.'
  },
  {
    img: 'https://www.cakebuzz.co.in/wp-content/uploads/2023/08/STRAWBERRY-LOVE-300x300.jpg',
    name: 'Strawberry Love',
    price: '₹19',
    description: 'Sweet and lovely Strawberry cake for your loved ones.'
  },
  {
    img: 'https://www.cakebuzz.co.in/wp-content/uploads/2023/08/PINEAPPLE-DELIGHT-300x300.jpg',
    name: 'Pineapple Delight',
    price: '₹21',
    description: 'A delightful Pineapple cake that refreshes your senses.'
  }
];

export const Product = () => {
  return (
    <div id="product" style={{ padding: '20px' }}>
      <center><Typography variant="h2" style={{ fontFamily: 'cursive', color: 'rgb(87, 127, 199)' }}>PRODUCTS</Typography></center>
      <div className="container mt-5">
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={product.img}
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
