const express = require('express')
const cors = require('cors');

const app = express()
app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());


const dbConnect = require('./dbConnect')

app.use(express.json())

const port = process.env.PORT ||5000

const userRoute = require('./routes/userRoute')

app.use('/api/users', userRoute)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))