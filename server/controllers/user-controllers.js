const Userss = require('../models/Userss')
const  User  = require('../models/Userss')


module.exports = {

async createUser(req,res){
    const createdUser = await User.create({ firstName: "paul" , lastname: " Rick" ,occupation: " Dealer" })
},

 getSingleUser( req ,res) {
   Userss.findAll().then((foundUser) => {
    res.json(foundUser);
   })
  





}
















}