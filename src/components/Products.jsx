import React, { useContext } from 'react';
import Product from './Product';
import { ProductsContext } from '../App';

function Products() {
    const { productsList, setProductsList } = useContext(ProductsContext)
    return (
        <div>
            {productsList.map((singleProduct) => {
                return <Product singleProduct={singleProduct} key={singleProduct.id} />;
            })}
        </div>
    );
}

export default Products;
