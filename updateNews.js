const News = require('./models/news');
const irna = require('./agencies/irna');
var jwt = require('jsonwebtoken');




const MakeIdentity = (title, date)=> {
    return jwt.sign({title, date,},"key");
}


module.exports = ()=>{
    // console.log(news)
    setInterval(() => {
        irna.allNews(newsArray=>{
            for (let index = 0; index < newsArray.length; index+=1) {
                const newOne = new News(newsArray[index])
                newOne.save( err => {
                    if(err) { return console.log("err >> title:",newsArray[index].title)}
                    return console.log("suc >> pubDate:",newsArray[index].date)
                })
            }
        });
    }, 5000);
}