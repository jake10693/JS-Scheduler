module.exports = function(sequelize, DataTypes) {
    var events = sequelize.define("events", {
      // Creating the start time table
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
  
      },
      startTime: {
          type: DataTypes.STRING,
          allowNull: false
        
      },
      endTime: {
          type: DataTypes.STRING,
          allowNull: false
      }
    
    });
    return events;
  };
  