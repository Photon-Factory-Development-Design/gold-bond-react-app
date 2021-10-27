import React from 'react';
import Price from 'components/Price';
import { Link, ProductImage } from 'components';
// styles
import styles from './ProductDetail.module.scss';

const ProductDetail = React.forwardRef(
    (
        {
            ASIN: { value: asin },
            productTitle: { value: productTitle } = { value: null },
            ratings: { value: ratings } = { value: {} },
            priceDetail: { value: priceDetail },
            images: { value: productImages },
            productAbout: { value: productFeatures },
            product
        },
        ref
    ) => {
        const {
            priceblock_ourprice: priceBlockOutPrice,
            ounce,
            price_block_savings: priceBlockSavings
        } = priceDetail || {};
        const { rateStar, acrCustomerReviewText } = ratings || {};

        const [selectedImage, setSelectedImage] = React.useState(
            (productImages || [])[0]
        );

        React.useEffect(() => {
            setSelectedImage((productImages || [])[0]);
        }, [productImages]);

        return (
            <div className="adt-product-details" ref={ref}>
                <div className="adt-product-images">
                    <div className="">
                        {selectedImage && (
                            <ProductImage img={selectedImage.realImageSrc} />
                        )}
                        <div className="aui-spinner aui-spinner-medium  aui-spinner-fading"></div>
                    </div>
                    <div className="adt-product-thumbnails">
                        {productImages.map((productImage, index) => (
                            <div
                                key={`product-image-${index}`}
                                className="adt-product-thumbnail"
                                onClick={() => setSelectedImage(productImage)}>
                                <span
                                    className={`a-button a-button-thumbnail a-button-toggle ${
                                        productImage === selectedImage
                                            ? 'a-button-selected'
                                            : ''
                                    }`}
                                    data-index="0">
                                    <div className="adt-product-image">
                                        <div
                                            className="adt-product-image-image "
                                            style={{
                                                backgroundImage: `url(${productImage.thumbnailSrc})`
                                            }}></div>
                                    </div>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="adt-product-info">
                    <div
                        className="adt-product-title"
                        title="Dr. Scholl’s® Pain Relief Orthotics for Heavy Duty Support, Men's 8-14">
                        <a
                            className="a-size-large a-link-normal a-color-base"
                            href={product.url}
                            target="blank">
                            {productTitle}
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
                        {priceBlockOutPrice && (
                            <Price value={priceBlockOutPrice} />
                        )}
                        <span style={{ color: '#888', display: 'none' }}>
                            {ounce}
                        </span>
                    </div>
                    <div
                        className="adt-product-price"
                        style={{ color: '#888', display: 'none' }}>
                        {priceBlockSavings && priceBlockSavings}
                    </div>
                    <div className="adt-add-to-cart">
                        <div
                            className="aui-add-to-cart "
                            style={{ width: '100%' }}>
                            <div className="aui-add-to-cart-messages">
                                <div className="aui-spinner   "></div>
                                <span className="aui-added-to-cart-message a-button-text a-color-success">
                                    <i
                                        className="a-icon a-icon-success"
                                        role="img"></i>
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
                    <div className="adt-product-features">
                        <h3>Product features</h3>
                        <ul className="adt-feature-bullets a-size-base a-color-base">
                            {productFeatures.map((feature, index) => (
                                <li key={`product-feature-${index}`}>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
);

export default ProductDetail;
