const fs = require('fs');

// return random number -> min inclusive + max exclusive
function getRandomInt(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    );
}

//create excuse
exports.create = (req, res) => {

    fs.readFile('./data.json', function (err, data) {

        //check code alrealdy use
        for(var i=0; i < data.length; i++){
            if(req.params.code === data[i]["http_code"]){
                return res.status(400).send(message = 'Code déjà utilisé');
            }
        }
        // reading json file
        var excuses = JSON.parse(data);
        // add new excuse
        let excuse = {"http_code" : req.body.code, "tag ": req.body.tag, "message ":req.body.message};
        // add new data
        excuses.push(excuse);

        // Writing to the file
        fs.writeFile("./data.json", JSON.stringify(excuses), err => {
     
            // Checking for errors
            if (err) throw err; 
            console.log("Done "); // Success
        });
    }) 

};

//get random excuse
exports.getRandom = (req, res) => {
    fs.readFile('./data.json', (err, data) => {
        if (err) throw err;

        const excuse = JSON.parse(data);
        var random;

        //get a random number
        //if message already use -> get random number
        do {
            random = getRandomInt(0, excuse.length);
        } while(req.params.message === excuse[random]["message "]);
        return res.send(excuse[random]);
    });
};

//get excude by code
exports.get = (req, res) => {
    //convert string to int
    var http_code = parseInt(req.params.code);

    fs.readFile('./data.json', (err, data) => {
        if (err) throw err;

        const excuses = JSON.parse(data);

        //find code
        for(var i= 0; i< excuses.length; i++){
            if(http_code === excuses[i]["http_code"]){

                //deconstruction datatab
                var code = excuses[i]["http_code"];
                var tag = excuses[i]["tag "];
                var message = excuses[i]["message "];
                const response = {code : code, tag: tag, message: message };

                return res.send(response);
            }
        }
        //if code not found
        return res.status(404).send(message = "Le code n'existe pas");
        
    });
    
};


