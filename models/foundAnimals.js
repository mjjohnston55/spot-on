module.exports = function(sequelize, DataTypes) {
    var foundAnimals = sequelize.define("Found_Animals", {
        id: { type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        animal_name: { type: DataTypes.STRING },
        species: { type: DataTypes.STRING, validate: {notEmpty: true}},
        breed: { type: DataTypes.STRING },
        picture: { type: DataTypes.TEXT },
        color: { type: DataTypes.STRING },
        animal_description: { type: DataTypes.TEXT },
        found_date: { type: DataTypes.DATE },
        found_where: { type: DataTypes.TEXT },
        zip_code: { type:DataTypes.INTEGER, validate: {notEmpty: true}},
        contact_email: { type: DataTypes.STRING, validate: {notEmpty: true}},
        });
    return foundAnimals;
    };