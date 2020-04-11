module.exports = function(sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
      // Creating the employee table
        name: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
        }
    });
    return Employee;
  };
  