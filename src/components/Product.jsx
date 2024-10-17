import React from 'react'

function Product({ singleProduct, themeType }) {
    return (
        <div style={{ backgroundColor: themeType == "light" ? "white" : "black" }}>
            <h3 style={{ color: themeType == "light" ? "black" : "white" }}>{singleProduct.title}</h3>
            <img src={singleProduct.image} style={{ width: 100, height: 100 }} />
        </div>
    )
}

export default Product