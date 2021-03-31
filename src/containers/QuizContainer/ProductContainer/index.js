import React from 'react';
// import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import products from 'common/data/products';
// import { Typography, Link } from 'components';
import ProductCard from 'components/ProductCard';
import { ProductDetail } from 'components';

// util to get products from question value
const getProducts = (asins) =>
    products.filter((product) => asins.includes(product.data.ASIN.value));

const ProductContainer = ({ asins }) => {
    const [products, setProducts] = React.useState([]);

    // update products for question
    React.useEffect(() => {
        if (asins) {
            setProducts(getProducts(asins) || []);
        }
    }, [asins]);

    // render
    return (
        <Grid container direction="row" spacing={5}>
            {products.map((product, index) => (
                <ProductCard key={`product-item-${index}`} {...product.data} />
            ))}
            {products[0] && <ProductDetail {...products[0].data} />}
        </Grid>
    );
};

export default ProductContainer;
