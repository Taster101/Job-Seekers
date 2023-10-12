const {Model, DataTypes} = require('sequelize')

const sequelize = require('../config/connection')


class Userss extends Model {}

Userss.init({

id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
},
firstname: {
    type: DataTypes.STRING,
    allowNull: false,
    
},
lastname: {
    type: DataTypes.STRING,
    allowNull: false
},
occupation: {
    type: DataTypes.STRING,
    allowNull: false
},
appied_jobs: {
    type: DataTypes.STRING
},




},
{
sequelize,
modelName: 'user',
underscored: true


})

module.exports = Userss;
