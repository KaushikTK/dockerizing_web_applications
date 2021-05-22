const app = require('express')()
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://mongo:27017/";

app.get('/',(req,res)=>{
    res.send('server is running through the container. Go to /put_data and then to /view_data to use mongodb...');
})

app.get('/put_data',(req,res)=>{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        console.log(`connected to the database and inserting..`)
        var myobj = { name: "Kaushik", address: "India" };
        dbo.collection("sample").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
      res.send('document inserted..');
})

app.get('/view_data',(req,res)=>{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("sample").findOne({}, function(err, result) {
          if (err) throw err;
          console.log(result);
          res.json(result)
          db.close();
        });
      });
})

const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`Go to localhost:${PORT}`)
})