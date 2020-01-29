const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, '/', '../client/')))

class AdminController {

    static uploadPage(req,res){
        res.sendfile(path.join(__dirname,'.','../../client/index.html'))
    }
}



module.exports = AdminController;