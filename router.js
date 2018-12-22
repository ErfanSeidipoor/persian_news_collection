const News = require('./models/news');

module.exports = app => {
    app.get('/', (req,res)=>res.send("news backed is runnig ..."))

    app.post('/getNews',(req,res)=>{
       

        let findOption = {};
        let limitOption = 5;
        let sortOption = '-newsId'

        if (req.body.greaterThan) {
            findOption = { 'newsId': {$gt: req.body.greaterThan} };
            sortOption = 'newsId'
        }
        else if (req.body.lowerThan ) {
            findOption = { 'newsId': {$lt: req.body.lowerThan} };
            sortOption = '-newsId'
        }

        if (req.body.limit && req.body.limit<50) {
            limitOption = req.body.limit;
        }

        News.find( findOption )
            .sort( sortOption )
            .limit( limitOption )
            .exec( (err, news)=>{
            if (err) {  return res.send("not Found"); }
            return res.status(200).send(news)
        }) 
    })
}