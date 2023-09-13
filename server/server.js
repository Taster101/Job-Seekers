const express = require('express')
const app = express()
const PORT = 3001;
const routes = require('../routes')
const Models = require('./models')
const sequelize = require('./config/connection')

app.use(routes);
/// need to make a 
app.use(express.json())
app.use(express.urlencoded({extended: true}));


//
//app.use(express.static('client'));

sequelize.sync().then(() => {
app.listen(PORT, () => 



console.log(`App listening at http://localhost:${PORT}`))
});


