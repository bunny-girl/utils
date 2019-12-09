const cheerio = require('cheerio');

const analyze = str => {
    const $ = cheerio.load(str);

    let title = $('a').text();

    return {
        title,
        imageCount : title.match(/\d+/)[0],
        id : $('a').attr('href').split('id=')[1],
    }
};

module.exports = {
    analyze,
}