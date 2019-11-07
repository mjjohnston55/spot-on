module.exports = function(sequelize, DataTypes) {
  var Animals = sequelize.define("Lost_Animals", {
    id: { type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    animal_name: { type: DataTypes.STRING, validate: {allowNulll:false}, is: ["^[a-z]+$",'i']},
    species: { type: DataTypes.STRING, validate: {allowNulll:false}, is: ["^[a-z]+$",'i']},
    breed: { type: DataTypes.STRING, validate: {allowNulll:false}, is: ["^[a-z]+$",'i']},
    picture: { type: DataTypes.STRING, validate: {allowNulll:false}},
    color: { type: DataTypes.STRING, validate: {allowNulll:false}, is: ["^[a-z]+$",'i']},
    animal_description: { type: DataTypes.TEXT, validate: {allowNulll:false}, is: ["^[a-z]+$",'i']},
    lost_at: { type: DataTypes.DATE, validate: {allowNulll:false}},
    lost_where: { type: DataTypes.TEXT, validate: {allowNulll:false}},
    still_lost: { type: DataTypes.BOOLEAN },
    contact_email: { type: DataTypes.STRING, validate: {isEmail:true}},
  });
  return Animals;
};
