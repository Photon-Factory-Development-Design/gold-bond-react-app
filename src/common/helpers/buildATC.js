import buildLink from './buildLink';
import isBuyBox from './isBuyBoxATC';
import isLinkedImage from './isLinkedImage';
import isCustomLink from './isCustomLink';
import buildBuyBox from './buildBuyBox';
import attachEvents from './attachEvents';
import getCookie from './getCookie';
import offerings from 'common/data/offerings';

export default async (link) => {
    if (!isLinkedImage(link) && !isBuyBox(link) && !isCustomLink(link)) {
        return;
    }

    if (isBuyBox(link)) {
        link = await buildBuyBox(link);
    }

    let newLink = await buildLink(
        link,
        getCookie('session-id'),
        offerings || []
    );

    if (newLink !== link.href) {
        link.href = newLink;
        attachEvents(link);
    }
};
