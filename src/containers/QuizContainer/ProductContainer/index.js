import React from 'react';
// import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import products from 'common/data/products';
// import { Typography, Link } from 'components';
import ProductCard from 'components/ProductCard';

// util to get products from question value
const getProducts = (asins) =>
    products.filter((product) => asins.includes(product.data.ASIN.value));

// const ProductImage = styled.img`
//     height: 80px;
// `;
// // product item component
// const ProductItem = ({ image, title, description, asin }) => (
//     <Grid item xs={12} md={3}>
//         <Grid container wrap="nowrap" direction="column" spacing={2}>
//             <Grid item xs>
//                 <Box display="flex" flexDirection="row" justifyContent="center">
//                     <ProductImage src={image} alt="product" />
//                 </Box>
//             </Grid>
//             <Grid item xs>
//                 <Typography align="center" variant="subtitle1">
//                     {title}
//                 </Typography>
//             </Grid>
//             <Grid item xs>
//                 <Box>
//                     <Typography align="center" variant="body1">
//                         {description.substr(0, 200) + '...'}
//                     </Typography>
//                 </Box>
//             </Grid>
//             <Grid item xs>
//                 <Box display="flex" flexDirection="row" justifyContent="center">
//                     <Link href="123" asin={asin}>
//                         Add To Cart
//                     </Link>
//                 </Box>
//             </Grid>
//         </Grid>
//     </Grid>
// );

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
        </Grid>
    );
};

export default ProductContainer;
