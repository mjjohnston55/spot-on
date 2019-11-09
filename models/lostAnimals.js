module.exports = function(sequelize, DataTypes) {
  var lostAnimals = sequelize.define("Lost_Animals", {
    id: { type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    animal_name: { type: DataTypes.STRING},
    species: { type: DataTypes.STRING, validate: {notEmpty: true}},
    breed: { type: DataTypes.STRING },
    picture: { type: DataTypes.TEXT },
    color: { type: DataTypes.STRING },
    animal_description: { type: DataTypes.TEXT },
    lost_date: { type: DataTypes.DATE },
    lost_where: { type: DataTypes.TEXT },
    still_lost: { type: DataTypes.BOOLEAN },
    zip_code: { type:DataTypes.INTEGER, validate: {notEmpty: true}},
    contact_email: { type: DataTypes.STRING, validate: {notEmpty: true}},
  });
  return lostAnimals;
};


