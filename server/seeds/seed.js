const  Userss = require('../models/Userss');
const userData = require ('./User.json')
const sequelize = require('../config/connection');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const drivers = await Userss.bulkCreate(userData);
  
    //for (const { id } of drivers) {
      // Need to include a valid driver_id when creating a license
     // const newLicense = await License.create({
       // driver_id: id,
    //  });
    
  
    process.exit(0);
};

        seedDatabase();

