const router = require('express').Router();
//const Sequelize = require('sequelize');
const users = require('./signUp')

router.use("/users", users);

///local host 3000
router.get('/',( req, res)=> {
    res.json("HI");
}) 

module.exports = router;