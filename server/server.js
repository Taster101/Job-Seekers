const express = require('express')
const app = express()
const PORT = 3001;
const routes = require('../routes')
//const Models = require('./models')
const sequelize = require('./config/connection')


//Needed for post request
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(routes);
/// need to make a 

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'../client/build/index.html'))
})


//
//app.use(express.static('client'));

sequelize.sync({force: true}).then(() => {
app.listen(PORT, () => 



console.log(`App listening at http://localhost:${PORT}`))
});


