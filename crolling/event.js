const 
    axios       = require("axios"),
    cheerio     = require("cheerio"),
    log         = console.log;


log("init?");

const getHtml = async () => {
    try {
        return await axios.get("https://www.yna.co.kr/sports/all");
    } catch(error) {
        console.error(error);
    }
};

getHtml()
    .then(html => {
        const 
            $           = cheerio.load(html.data),
            $bodyList   = $("div.headline-list ul").children("li.section02");
        let
            ulList = [];
        
        $bodyList.each( (i, elem) => {
            ulList[i] = {
                title       : $(elem).find('strong.news-tl a').text(),
                url         : $(elem).find('strong.news-tl a').attr('href'),
                image_url   : $(elem).find('p.poto a img').attr('src'),
                image_alt   : $(elem).find('p.poto a img').attr('alt'),
                summary     : $(elem).find('p.lead').text().slice(0, -11),
                data        : $(elem).find('span.p-time').text()
            };
        });

        const data = ulList.map( n => {return n.title});
        return data;
    })
    .then(res => log(res));