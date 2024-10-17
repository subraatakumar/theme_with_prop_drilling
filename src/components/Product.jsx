import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import Rating from './Rating';
function Product({ singleProduct }) {
  const themeType = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: themeType == 'light' ? 'white' : 'black' }}>
      <h3 style={{ color: themeType == 'light' ? 'black' : 'white' }}>
        {singleProduct.title}
      </h3>
      <img src={singleProduct.image} style={{ width: 100, height: 100 }} />
      <Rating {...singleProduct.rating} />
    </div>
  );
}

export default Product;
