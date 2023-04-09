const cors = require('cors')

const express = require('express')
const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/', require('./Routes/Auth'));

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})
