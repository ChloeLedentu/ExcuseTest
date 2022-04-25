module.exports = app => {
    //variables
    var router = require("express").Router();
    const excuse = require('../controllers/excuse.controller.js');

    // api route name
    app.use('/server/excuse', router);

    // Random excuse
    router.get('/:message', excuse.getRandom);

    // get excuse by the code
    router.get('/http_code/:code', excuse.get);

    // create a new excuse
    router.post('/', excuse.create);


    
};