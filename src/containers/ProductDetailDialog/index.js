import React from 'react';
import { Dialog } from '@material-ui/core';
import { ProductDetail } from 'components';

const ProductDetailDialog = ({ open, setOpen, product }) => {
    return (
        <Dialog
            open={open}
            fullWidth={true}
            maxWidth="md"
            onClose={() => setOpen(false)}
            aria-labeledby="product-detail">
            {product && <ProductDetail product={product} {...product.data} />}
        </Dialog>
    );
};

export default ProductDetailDialog;
