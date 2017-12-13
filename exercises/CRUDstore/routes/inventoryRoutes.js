const express = require("express");
const inventoryRoutes = express.Router();
const Inventory = require("../models/inventory");

inventoryRoutes.route("/")
    .get((req, res) => {
        Inventory.find((err, items) => {
            if (err) return res.status(500).send(err);
            res.send(items);
        });
    })
    .post((req, res) => {
        const newItem = new Inventory(req.body);
        newItem.save((err) => {
            if (err) return res.status(500).send(err);
            res.status(201).send(newItem);
        });
    })

inventoryRoutes.route("/:id")
    .get((req, res) => {
        Inventory.findById(req.params.id, (err, item) => {
            if (err) return res.status(500).send(err);
            res.send(item);
        });
    })
    .put((req, res) => {
        Inventory.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, item) => {
            if (err) return res.status(500).send(err);
            res.send(item);
        });
    })
    .delete((req, res) => {
        Inventory.findByIdAndRemove(req.params.id, (err, item) => {
            if (err) return res.status(500).send(err);
            res.send({message: "Item successfully removed from inventory", item})
        });
    })

module.exports = inventoryRoutes;
