var request = require("request");
var parser = require('xml2json');

exports.allNews = (callback)=>{
    const  options = { 
        method: 'GET',
        url: 'http://www.irna.ir/en/rss.aspx' ,
    };
    request(options, (error, response, body) => {
        if (error) return null;
        const obj = JSON.parse(parser.toJson(body));
        const NewsArray = obj.rss.channel.item.map( (item,index)=>{
            const { JSDOM } = require("jsdom");
            const dom = new JSDOM(item.description);
            const description = dom.window.document.querySelector("p").textContent;
            
            return ({
                title: item.title,
                description,
                url: item.link,
                imageurl: item['media:content'].url,
                pubDate: Date.parse(item.pubDate),
                agency: "irna",
                language: "en",
            })
        })
        return callback(NewsArray);
    });
}