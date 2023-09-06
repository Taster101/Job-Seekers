const {Model, DataTypes, Sequelize} = require('sequelize')

const sequelize = require('../config/connection')


class Users extends Model {}

Users.init({

id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
},
firstName: {
    DataTypes: DataTypes.STRING,
    allowNull: false,
    
},
lastName: {
    type: DataTypes.STRING,
    allowNull: false
},
occupation: {
    type: DataTypes.STRING,
    allowNull: false
},
appied_jobs: {
    type: DataTypes.STRING
}

},
{
sequelize,
modelName: 'user'


})

module.exports = Users;
