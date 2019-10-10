import "@babel/polyfill";

import { pi, power, foo } from './lib';

let crawlling = require("./crawllingTest");

console.log(pi);
console.log(power(pi, pi));

const f = new foo();
console.log(f.foo());
console.log(f.bar());



function crawling() {
    crawlling()
        .then(html => {
            const 
                $cherrio    = cheerio.load(html.data),
                $bodyList   = $("div.headline-list ul").children("li.section02");
            let
                ulList = [];
            
            $bodyList.each( (i, elem) => {
                ulList[i] = {
                    title       : $cherrio(elem).find('strong.news-tl a').text(),
                    url         : $cherrio(elem).find('strong.news-tl a').attr('href'),
                    image_url   : $cherrio(elem).find('p.poto a img').attr('src'),
                    image_alt   : $cherrio(elem).find('p.poto a img').attr('alt'),
                    summary     : $cherrio(elem).find('p.lead').text().slice(0, -11),
                    data        : $cherrio(elem).find('span.p-time').text()
                };
            });

            const data = ulList.map( n => {return n.title});
            console.log(data);
            return data;
        })
        .then(res => log(res));
}