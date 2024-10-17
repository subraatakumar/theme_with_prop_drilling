import React from 'react';
import Product from './Product';
function Products({ productsList }) {
    return (
        <div>
            {productsList.map((singleProduct) => {
                return (
                    <Product
                        singleProduct={singleProduct}
                        key={singleProduct.id}
                    />
                );
            })}
        </div>
    );
}

export default Products;
