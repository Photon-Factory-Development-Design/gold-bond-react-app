import React from 'react';
// import styled from 'styled-components';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import products from 'common/data/products';
import MuiCarousel from 'react-material-ui-carousel';
// import { Typography, Link } from 'components';
import ProductCard from 'components/ProductCard';
import { ProductDetail } from 'components';

// util to get products from question value
const getProducts = (asins) =>
    products.filter((product) => asins.includes(product.data.ASIN.value));

const ProductContainer = ({ asins, setDetailProduct }) => {
    const [products, setProducts] = React.useState([]);
    const productDetailRef = React.useRef(null);
    const theme = useTheme();

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

    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    // render
    return (
        <Grid container direction="row" spacing={5} justify="center">
            {matches ? (
                <React.Fragment>
                    {products.length > 1 &&
                        products.map((product, index) => (
                            <ProductCard
                                setDetailProduct={setDetailProduct}
                                key={`product-item-${index}`}
                                product={product}
                                {...product.data}
                            />
                        ))}
                </React.Fragment>
            ) : (
                <MuiCarousel
                    animation="slide"
                    autoPlay={false}
                    indicators={false}>
                    {products.length > 1 &&
                        products.map((product, index) => (
                            <ProductCard
                                setDetailProduct={setDetailProduct}
                                key={`product-item-${index}`}
                                product={product}
                                {...product.data}
                            />
                        ))}
                </MuiCarousel>
            )}
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
