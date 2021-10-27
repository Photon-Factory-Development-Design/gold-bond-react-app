import React from 'react';
import Price from '../Price';
import Link from '../Link';
// styles
import styles from './ProductCard.module.scss';

const ProductCard = ({
    ASIN: { value: asin } = { value: null },
    mainImage: { value: mainImage } = { value: null },
    productTitle: { value: productTitle } = { value: null },
    ratings: { value: ratings } = { value: {} },
    priceDetail: { value: priceDetail },
    setDetailProduct,
    product
}) => {
    const {
        priceblock_ourprice: priceBlockOutPrice,
        ounce,
        price_block_savings: priceBlockSavings
    } = priceDetail || {};
    const { rateStar, acrCustomerReviewText } = ratings || {};

    return (
        <div className="adt-product-card">
            <div className="adt-product-asin a-size-base a-color-secondary">
                {asin}
            </div>
            <a href={product.url}>
                <div
                    className="adt-product-image"
                    style={{
                        height: 180,
                        paddingTop: 0,
                        marginBottom: 10
                    }}>
                    <div
                        className="adt-product-image-image "
                        style={{
                            backgroundImage: `url(${mainImage})`
                        }}></div>
                </div>
            </a>
            <div className="adt-product-title" title={productTitle}>
                <a className="adt-product-title-placeholder a-size-base a-link-normal a-color-base">
                    <br />
                    <br />
                </a>
                <a
                    className="adt-product-title-clamped a-size-base a-link-normal a-color-base"
                    href={product.url}
                    target="blank">
                    <div className="clamp-lines ">
                        <div>{productTitle}</div>
                    </div>
                </a>
            </div>
            {rateStar && (
                <div className="adt-product-rating">
                    <span className="aui-average-customer-reviews">
                        <a
                            href={`${product.url}}#customerReviews`}
                            className={styles.rateContainer}>
                            <i className={rateStar}></i>
                        </a>
                        <a
                            className="a-size-base a-link-normal a-color-base"
                            href={`${product.url}}#customerReviews`}>
                            {acrCustomerReviewText}
                        </a>
                    </span>
                </div>
            )}

            <div className="adt-product-price">
                {priceBlockOutPrice && <Price value={priceBlockOutPrice} />}
                <span style={{ color: '#888', display: 'none' }}>{ounce}</span>
            </div>
            <div
                className="adt-product-price"
                style={{ color: '#888', display: 'none' }}>
                {priceBlockSavings && priceBlockSavings}
            </div>
            <div className="adt-add-to-cart">
                <div className="aui-add-to-cart " style={{ width: '100%' }}>
                    <div className="aui-add-to-cart-messages">
                        <div className="aui-spinner"></div>
                        <span className="aui-added-to-cart-message a-button-text a-color-success">
                            <i className="a-icon a-icon-success" role="img"></i>
                            Added to Cart
                        </span>
                    </div>
                    <Link
                        href="123"
                        asin={asin}
                        className="a-button-text"
                        aria-hidden="true">
                        Add to Cart
                    </Link>
                </div>
            </div>
            <div
                className="adt-quick-look a-size-base"
                onClick={() => setDetailProduct(product)}>
                <div className="adt-quick-look-icon a-size-base"></div>
                Quick Look
            </div>
        </div>
    );
};

export default ProductCard;
