module.exports = function(sequelize, DataTypes) {
    var events = sequelize.define("event", {
      // Creating the day table
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
  
      },
      startTime: {
          type: DataTypes.DATE,
          allowNull: false
        
      },
      endTime: {
          type: DataTypes.DATE,
          allowNull: false
      }
    
    });
    return events;
  };
  