const app = require('express')();

app.get('/',(req,res)=>{
    res.send('This is the server running on port 4000 from the container...')
})

app.listen(4000,()=>{
    console.log('Listening at localhost:4000');
});
