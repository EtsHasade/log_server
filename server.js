const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()

// Express App Config
app.use(cookieParser())
app.use(bodyParser.json());
app.use(cors());


const logger = require('./logger.service')
// routes
app.post('*/*', (req, res) => {
    logger.info(req.body);
    res.status(200).end();
})

const port = process.env.PORT || 3030;
app.listen(port, () => {
    logger.info('Server is running on port: ' + port)
});
