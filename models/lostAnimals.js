module.exports = function(sequelize, DataTypes) {
  var lostAnimals = sequelize.define("Lost_Animals", {
    id: { type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    animal_name: { type: DataTypes.STRING, validate: {allowNull: true}, is: ["^[a-z]+$",'i']},
    species: { type: DataTypes.STRING, validate: {allowNull: true}, is: ["^[a-z]+$",'i']},
    breed: { type: DataTypes.STRING, validate: {allowNull: true}, is: ["^[a-z]+$",'i']},
    picture: { type: DataTypes.STRING, validate: {allowNull: true}},
    color: { type: DataTypes.STRING, validate: {allowNull: true}, is: ["^[a-z]+$",'i']},
    animal_description: { type: DataTypes.TEXT, validate: {allowNull: true}, is: ["^[a-z]+$",'i']},
    lost_date: { type: DataTypes.DATE, validate: {allowNull: true}},
    lost_where: { type: DataTypes.TEXT, validate: {allowNull: true}},
    still_lost: { type: DataTypes.BOOLEAN },
    zip_code: { type:DataTypes.INTEGER, validate: {allowNull:false}},
    contact_email: { type: DataTypes.STRING, validate: {isEmail:true}},
  });
  return lostAnimals;
};


