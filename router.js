const News = require('./models/news');

module.exports = app => {
    app.get('/', (req,res)=>res.send("news backed is runnig ..."))

    // app.get('/get',(req,res)=>{
    //     News.find({}).limit(10).sort({}).select({ }).exec( (err, news)=>{
    //         if (err) { return res.send("not Found"); }
    //         return res.status(200).send(news)
    //     }) 
    // })
    app.get('/get',(req,res)=>{
        console.log("/get------------------------------------------------");
        News.find({}).exec( (err, news)=>{
            if (err) {  return res.send("not Found"); }
            return res.status(200).send(news)
        }) 
    })
}