const app = require('express')()

app.get('/',(req,res)=>{
    res.send('this is the node server running through the container');
})

const port = 5000;

app.listen(port,()=>{
    console.log(`Head on to localhost:${port}`)
})