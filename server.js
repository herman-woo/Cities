//Express to run server and routes
const express = require('express');

//start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware */
//configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Cors for cross origin allowance

const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('demo'));



const port = 8000;

const server = app.listen(port, listening);

function listening(){
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}
