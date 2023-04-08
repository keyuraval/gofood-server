global.foodData = require('./db')(function call(err, data, CatData) {
    // console.log(data)
    if (err) console.log(err);
    global.foodData = data;
    global.foodCategory = CatData;
})
const cors = require('cors')

const express = require('express')
const app = express()
const port = 5000
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/', require('./Routes/Auth'));

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})
