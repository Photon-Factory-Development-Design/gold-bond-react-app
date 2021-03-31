'use strict';

import clipCoupon from './clipCoupon';
import {
    addToCartInBackground,
    addToCartInNewWindow
} from './addToCartActions';
import { action } from 'common/data/cb';

export default (link) => {
    let newNode = link.cloneNode(true);

    link.parentNode.replaceChild(newNode, link);
    newNode.classList.add('loaded');

    const addDiscount = async (el) => {
        if (el.hasAttribute('data-product-promo')) {
            const PROMOTIONS = JSON.parse(
                el.getAttribute('data-product-promo')
            );

            if (PROMOTIONS && PROMOTIONS.length) {
                PROMOTIONS.forEach(async (promo) => {
                    await clipCoupon(promo);
                });
            }
        }
    };

    switch (action) {
        case 'tab':
            newNode.setAttribute('target', '_blank');
            newNode.addEventListener('click', async () => {
                console.log('123');
                await addDiscount(newNode);
            });
            break;
        case 'window':
            newNode.addEventListener('click', async (event) => {
                console.log('123');
                await addDiscount(newNode);
                addToCartInNewWindow(event, link);
            });
            break;
        case 'background':
            newNode.addEventListener('click', async (event) => {
                console.log('123');
                await addDiscount(newNode);
                addToCartInBackground(event, link);
            });
            break;
        default:
            return;
    }
};
