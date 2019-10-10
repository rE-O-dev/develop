const 
    axios       = require("axios"),
    cheerio     = require("cheerio"),
    log         = console.log;


log("init?");

module.exports = getHtml = async () => {
    try {
        return await axios.get("https://www.yna.co.kr/sports/all");
    } catch(error) {
        console.error(error);
    }
};