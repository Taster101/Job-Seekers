const router = require('express').Router();
//const Sequelize = require('sequelize');

///local host 3000
router.get('/',( req, res)=> {
    res.json("HI");
}) 

module.exports = router;