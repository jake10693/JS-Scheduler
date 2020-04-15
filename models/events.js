module.exports = function(sequelize, DataTypes) {
    var events = sequelize.define("events", {
      // Creating the start time table
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
  
      },
      startDate: {
          type: DataTypes.STRING,
          allowNull: false
        
      },
      endDate: {
          type: DataTypes.STRING,
          allowNull: false
        
      },
      startTime: {
          type: DataTypes.STRING,
          allowNull: false
        
      },
      endTime: {
          type: DataTypes.STRING,
          allowNull: false
      },
      color: {
          type: DataTypes.STRING,
          allowNull: true
      }
    
    });
    return events;
  };
  