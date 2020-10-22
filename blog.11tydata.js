module.exports = {
    eleventyComputed: {
        permalink: data => {
            data.collections.all;

            return "/blog/";
        }
    }
};
