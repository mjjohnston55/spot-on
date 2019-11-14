var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/lostanimals", function(req, res) {
    db.Lost_Animals.findAll({}).then(function(animals) {
      res.json(animals);
    });
  });
  
  app.get("/api/foundanimals", function(req, res) {
    db.Found_Animals.findAll({}).then(function(animals) {
      res.json(animals);
    });
  });

  

  app.get("/api/lost/:zipcode", function(req,res){
    db.Lost_Animals.findAll({
      where:{
        zip_code: req.params.zipcode
      }
    })
    .then(function(animals){
      res.json(animals);
    })
  });

  app.get("/api/found/:zipcode", function(req,res){
    db.Found_Animals.findAll({
      where:{
        zip_code: req.params.zipcode
      }
    })
    .then(function(animals){
      res.json(animals);
    })
  });

  // Create a new example
  app.post("/Lost_Animals/create", function(req, res) {
    db.Lost_Animals.create({
      animal_name: req.body.name,
      species: req.body.species,
      breed: req.body.breed,
      picture: req.body.picture,
      color: req.body.color,
      animal_description: req.body.description,
      lost_date: req.body.date,
      lost_where: req.body.where,
      zip_code: req.body.zip,
      contact_email: req.body.email
  }).then(function (reuslt) {
      console.log(reuslt);
      res.redirect("/");
    });
  });

  // Delete an example by id
  app.delete("/api/animals/:id", function(req, res) {
    db.Animals.destroy({ 
      where: { 
        id: req.params.id 
      } 
    })
    .then(function(animals) {
      res.json(animals);
    });
  });

  app.put("/api/animals/", function(req, res) {
    db.Animals.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(animals) {
      res.json(animals);
    });
  });
};
