var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index");
  });

  app.get("/lostForm", function(req, res) {
    res.render("lostForm");
  });

  app.get("/foundForm", function(req, res) {
    res.render("foundForm");
  });
  
  app.get("/WhatWeDo", function(req, res){
    res.render("WhatWeDo");
  });
  
  app.get("/foundresults", function(req, res) {
    db.Found_Animals.findAll({}).then(function(dbExamples) {
      res.render("foundresults", {
        animals : dbExamples
      });
    });
  });

  app.get("/lostresults", function(req, res) {
    db.Lost_Animals.findAll({}).then(function(dbExamples) {
      res.render("lostresults", {
        animals : dbExamples
      });
    });
  });

  app.get("/Found_Animals/results", function(req,res){
    let condition = {};
    if(req.query.name !== ""){
      condition.animal_name = req.query.name
    }
    if(req.query.species !== ""){
      condition.species = req.query.species
    }
    if(req.query.breed !== ""){
      condition.breed = req.query.breed
    }
    if(req.query.color !== ""){
      condition.color = req.query.color
    }
    if(req.query.zip !== ""){
      condition.zip_code = req.query.zip
    }
    if(req.query.where !== ""){
      condition.found_where = req.query.where
    }
    db.Found_Animals.findAll({
      where: condition
    }).then(function(animalList) {
      res.render("foundresults", { animals : animalList });
    });
  });

  app.get("/Lost_Animals/results", function(req,res){
    let condition = {};
    if(req.query.name !== ""){
      condition.animal_name = req.query.name
    }
    if(req.query.species !== ""){
      condition.species = req.query.species
    }
    if(req.query.breed !== ""){
      condition.breed = req.query.breed
    }
    if(req.query.color !== ""){
      condition.color = req.query.color
    }
    if(req.query.zip !== ""){
      condition.zip_code = req.query.zip
    }
    if(req.query.where !== ""){
      condition.lost_where = req.query.where
    }
    db.Lost_Animals.findAll({
      where: condition
    }).then(function(animalList) {
      res.render("lostresults", { animals : animalList });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
