export const isEmpty = (obj) => Object.keys(obj).length === 0;

export const serialize = (obj) => {
    let str = [];
    Object.keys(obj).forEach((p) => {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    });
    return str.join('&');
};
