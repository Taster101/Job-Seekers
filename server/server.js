const express = require('express')
const app = express()
const PORT = 3000;


const sequelize = require('./config/connection')

/// need to make a 
app.use(express.json())
app.use(express.urlencoded({extended: true}));


//
app.use(express.static('client'));

sequelize.sync().then(() => {
app.listen(PORT, () => 



console.log(`App listening at http://localhost:${PORT}`))
});


