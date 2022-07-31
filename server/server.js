const express = require("express");
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const sequelize = require('./config/connection');
const app = express();
const routes  = require('./routes')

app.use(cors())

//body parsers
app.use(express.json()); //configure request to accept json
app.use(express.urlencoded({extended:true})) // configure request to accept arrays and string

app.use(express.static(__dirname + '/public'));

app.use(routes);

app.listen(PORT, () => {
     console.log(`Server Listening on ${PORT} ...`);
     sequelize.sync({force: false});
});

