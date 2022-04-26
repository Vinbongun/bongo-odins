const cheerio = require('cheerio');

module.exports = async function getTopModels(content, url){
    const $ = cheerio.load(content);
    const result = []

    $('.ls_thumb').each((idx, elem) => {
        
        const href = url + $(elem).find('a').attr('href')
        
        result.push({
            href:href
        })
    })

    return result
}
