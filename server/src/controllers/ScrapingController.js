const request = require("request");
// const cheerio = require("cheerio");
// const rp = require("request-promise");

const jijiUrl = "https://jiji.ng/houses-apartments-for-rent";
const propertyproUrl = "https://www.propertypro.ng/";

const options = {
  url: jijiUrl,
  json: true
};

class ScrapingController {
  static async scrapeJiji(req, res) {
    try {
      // const data = await rp(options);
      // const $ = cheerio.load(data);
      let elements = [];
      // $(".b-product-plate--vip").each((div, h3) => {
      //   elements.push({
      //     divs: $(div)
      //       .find(".b-list-advert__template-title")
      //       .text(),
      //     h3s: $(h3).find('.qa-advert-list-item-title').text()
      //   });
      // });
      res.send(elements);
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = ScrapingController;
