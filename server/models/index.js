const  Job =  require('./job')
const User   = require('./Userss')



Job.hasMany(User, {
    foreignKey: "applicant"
})

User.belongsTo(Job, {
    foreignKey: 'applicant'
})


module.exports = {User , Job}