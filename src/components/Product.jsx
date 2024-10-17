import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import Rating from './Rating';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Button, Text, Heading } from '@chakra-ui/react'
function Product({ singleProduct }) {
    const themeType = useContext(ThemeContext);

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={singleProduct.image}
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                    <Heading size='md'>{singleProduct.title}</Heading>

                    <Text py='2'>
                        {singleProduct.description}
                    </Text>
                </CardBody>

                <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        Add To Cart
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
}

export default Product;
