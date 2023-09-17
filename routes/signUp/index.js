const router = require('express').Router();
const Users  = require('../../server/models/user')



//localhost3001/users
router.get('/', (req,res) => {

   res.json("hello there");

}),

router.post('/' , (req , res) => {

    const { firstName, lastName , occupation } = req.body

    const userData = Users.create({
        firstName: firstName,
        lastName: lastName,
        occupation: occupation
        
    });
      res.json(userData)
})










module.exports = router;