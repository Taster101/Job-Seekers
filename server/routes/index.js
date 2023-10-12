const router = require('express').Router();
const Userss = require('../models/Userss')
//const Sequelize = require('sequelize');
//const users = require('./signUp') 
const   getSingleUser   = require('../controllers/user-controllers')

//router.use("/users", users);

///local host 3000
router.get('/',( req, res)=> {
    res.json(getSingleUser);
}) 

router.get('/new', (req,res) => {
    res.json(getSingleUser)
})



router.get('/i', (req, res) => {
    // Get all books from the book table
    Userss.findAll().then((bookData) => {
      res.json(bookData);
    });
  });
//router.route(/new)
//}
module.exports = router;