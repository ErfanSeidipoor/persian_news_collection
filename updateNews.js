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
                now = new Date(); 
                const newOne = new News({
                    ...newsArray[index],
                    dbDate: new Date(now.getTime()+index)
                })
                newOne.save( err => {})
            }
        });
    }, 5000);
}