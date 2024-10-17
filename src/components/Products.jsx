import React from 'react'
import Product from './Product'
function Products({ productsList, themeType }) {
    return (
        <div>
            {
                productsList.map(singleProduct => {
                    return <Product singleProduct={singleProduct} key={singleProduct.id} themeType={themeType} />
                })
            }
        </div>
    )
}

export default Products