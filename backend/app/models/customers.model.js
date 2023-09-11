module.exports = (sequelize, Sequelize) => {
    const customers = sequelize.define("customers", {
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      addcourses: {
        type: Sequelize.STRING
      }
    });
  
    return customers;
  };