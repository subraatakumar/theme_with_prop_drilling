import React, { useContext } from 'react';
import Product from './Product';
import { ProductsContext } from '../App';
import { SimpleGrid, Box } from '@chakra-ui/react';
function Products() {
    const { productsList, setProductsList } = useContext(ProductsContext);
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {productsList.map((singleProduct) => {
                return <Box key={singleProduct.id} p={4}>
                    <Product singleProduct={singleProduct} />
                </Box>

            })}

        </SimpleGrid>
    );
}

export default Products;
