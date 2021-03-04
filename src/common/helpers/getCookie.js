export default (name) => {
    const match = document.cookie.match(
        new RegExp('(^| )' + name + '=([^;]+)')
    );

    if (match) {
        return match[2];
    } else {
        return '134-1217005-5305337';
    }
};
