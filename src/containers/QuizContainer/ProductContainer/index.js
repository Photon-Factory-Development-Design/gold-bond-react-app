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

const ProductContainer = ({ asins, setDetailProduct }) => {
    const [products, setProducts] = React.useState([]);
    const productDetailRef = React.useRef(null);

    // update products for question
    React.useEffect(() => {
        if (asins) {
            setProducts(getProducts(asins) || []);
        }
    }, [asins]);

    React.useEffect(() => {
        if (products.length === 1) {
            productDetailRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [products]);

    // render
    return (
        <Grid container direction="row" spacing={5}>
            {products.length > 1 &&
                products.map((product, index) => (
                    <ProductCard
                        setDetailProduct={setDetailProduct}
                        key={`product-item-${index}`}
                        product={product}
                        {...product.data}
                    />
                ))}
            {products.length === 1 && products[0] && (
                <ProductDetail
                    ref={productDetailRef}
                    product={products[0]}
                    {...products[0].data}
                />
            )}
        </Grid>
    );
};

export default ProductContainer;
