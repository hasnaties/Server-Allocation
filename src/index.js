const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path')

const { allocate, deallocate } = require('./utils/part2');

const app = express();
app.use(bodyParser.json())
app.use(cors())

const router = express.Router();
app.use(express.static(path.join(__dirname,'../angular-app')))
app.use(router)

router.get('/api/allocate', async (req, res) => {
    
    if (req.query.region) {
        return res.status(201).send({response: await allocate(req.query.region)})
    }

    return res.status(400)
})

router.post('/api/deallocate', (req, res) => {

    if (req.body.server) {
        return res.status(200).send({response: deallocate(req.body.server)})
    }
    return res.status(400);
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'../angular-app/index.html'));
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is up on port: ' + port);
})