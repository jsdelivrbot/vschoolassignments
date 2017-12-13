const express = require("express");
const petRoutes = express.Router();
const Pet = require("../models/pet")

petRoutes.route("/")
    .get((req, res) =>{
        Pet.find((err, pets) => {
            if (err) return res.status(500).send(err);
            res.send(pets);
        });
    })
    .post((req, res) => {
        const newPet = new Pet(req.body);
        newPet.save((err) => {
            if (err) return res.status(500).send(err);
            res.status(201).send(newPet);
        });
    })
 petRoutes.route("/:id")
    .get((req, res) => {
        Pet.findById(req.params.id, (err, pet) => {
            if (err) return res.status(500).send(err);
            res.send(pet);
        });
    })
    .put((req, res) => {
        Pet.findByIdAndUpdate(req.prams.id, req.body, {new: true}, (err, pet) => {
            if (err) return res.status(500).send(err);
            res.send(pet);
        });
    })
    .delete((req, res) => {
        Pet.findByIdAndRemove(req.params.ed, (err, pet) => {
            if (err) return res.status(500).send(err);
            res.send({message: "Successfully removed pet", pet})
        });
    })

module.exports = petRoutes;
