const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.listen(3004, ()=>{
        console.log(`Server Started at ${PORT}`);
    })
}

setupAndStartServer();