const { scrapeDataFromAmazon }  =  require("../services/amazonScraper");

const scrape = async function (req, res) {
    try {
        const keyword = req.query.keyword;
        const scrapedData = await scrapeDataFromAmazon(keyword);
        console.log(scrapedData.data);
        res.send(scrapedData.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            success: false,
            error: 'Internal Server Error' 
        });
    }
}

module.exports = { scrape };