import React from 'react';
import Price from 'components/Price';
import { ProductImage } from 'components';

const ProductDetail = ({
    productTitle: { value: productTitle } = { value: null },
    ratings: { value: ratings } = { value: {} },
    priceDetail: { value: priceDetail },
    images: { value: productImages },
    productAbout: { value: productFeatures }
}) => {
    const {
        priceblock_ourprice: priceBlockOutPrice,
        ounce,
        price_block_savings: priceBlockSavings
    } = priceDetail || {};
    const { rateStar, acrCustomerReviewText } = ratings || {};

    const [selectedImage, setSelectedImage] = React.useState(
        (productImages || [])[0]
    );

    console.log(productImages);

    return (
        <div className="adt-product-details">
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
                        href="/Dr-Scholls-Relief-Orthotics-Support/dp/B01M8O5HLY">
                        {productTitle}
                    </a>
                </div>
                {rateStar && (
                    <div className="adt-product-rating">
                        <span className="aui-average-customer-reviews">
                            <a href="/product-reviews/B01M8O5HLY">
                                <i className={rateStar}></i>
                            </a>
                            <a
                                className="a-size-base a-link-normal a-color-base"
                                href="/product-reviews/B01M8O5HLY">
                                {acrCustomerReviewText}
                            </a>
                        </span>
                    </div>
                )}
                <div className="adt-product-price">
                    {priceBlockOutPrice && <Price value={priceBlockOutPrice} />}
                    <span style={{ color: '#888' }}>{ounce}</span>
                </div>
                <div className="adt-product-price" style={{ color: '#888' }}>
                    {priceBlockSavings && priceBlockSavings}
                </div>
                <div className="adt-add-to-cart">
                    <div className="aui-add-to-cart " style={{ width: '100%' }}>
                        <div className="aui-add-to-cart-messages">
                            <div className="aui-spinner   "></div>
                            <span className="aui-added-to-cart-message a-button-text a-color-success">
                                <i
                                    className="a-icon a-icon-success"
                                    role="img"></i>
                                Added to Cart
                            </span>
                        </div>
                        <div
                            className="aui-add-to-cart-button"
                            style={{ width: '100%;' }}>
                            <span
                                className="a-button a-button-primary add-to-cart a-button-icon"
                                style={{ width: '100%' }}>
                                <span className="a-button-inner">
                                    <i className="a-icon a-icon-cart"></i>
                                    <a
                                        className="a-button-text"
                                        aria-hidden="true">
                                        Add to Cart
                                    </a>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="adt-product-features">
                    <h3>Product features</h3>
                    <ul className="adt-feature-bullets a-size-base a-color-base">
                        {productFeatures.map((feature, index) => (
                            <li key={`product-feature-${index}`}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;