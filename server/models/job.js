const { Model, DataTypes} = require('sequelize');



const sequelize = require('../config/connection');

class Jobs extends Model {}

Jobs.init({

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
company: {
    type: DataTypes.STRING,
    allowNull: false
},
job_title: {
    type: DataTypes.STRING,
    allowNull: false
},
description: {
    type: DataTypes.TEXT,
    allowNull: false
},
salary: {
    type: DataTypes.INTEGER,
    allowNull: false
},
application: {
    type: DataTypes.STRING,
    allowNull: false
},
number_of_employees: {
    type: DataTypes.INTEGER,
    allowNull: false
},
location: {
    type: DataTypes.STRING,
    allowNull: false
},
job_type: {
    type: DataTypes.STRING,
    allowNull: false
}, 

    applicantID: {
        type: DataTypes.INTEGER,
       reference: {
         model: "Users",
            key:"id"
        }
    }
    


}, 
{
    sequelize,
    //freezeTableName: true,
    //modelName: 'Jobs',
    //underscored: true

});

module.exports = Jobs;