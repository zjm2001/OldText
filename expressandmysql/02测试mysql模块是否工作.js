const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors()) 
// app.use(express.json())
// app.use(express.urlencoded({extended:false})) 
app.get('/list', (req, res) => { 
    res.send(body)
})
app.listen(80, () => {
    console.log('Express server running at http:127.0.0.1');
})