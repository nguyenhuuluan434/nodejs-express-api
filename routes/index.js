let express = require('express');
let router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', async function (req, res, next) {
    res.json(await getData());
});

function sleep(ms) {
    let r = new Promise((resolve) => setTimeout(() => resolve([0, 1]), ms));
    return r;
}

async function getData() {
    let x = await sleep(20000);
    return x
}


module.exports = router;
