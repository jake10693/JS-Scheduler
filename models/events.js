module.exports = function(sequelize, DataTypes) {
    var events = sequelize.define("events", {
      // Creating the start time table
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
  
      },
      startTime: {
          type: DataTypes.INTEGER,
          allowNull: false
        
      },
      endTime: {
          type: DataTypes.INTEGER,
          allowNull: false
      }
    
    });
    return events;
  };
  