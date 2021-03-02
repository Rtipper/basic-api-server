'use strict';

const express = require('express');

const Foods = require('../models/food.js')
const foodItems = new Foods();

const foodRouter = express.Router();

// ROUTES
foodRouter.get('/food', getFood);
foodRouter.get('/food/:id', getOneFood);
foodRouter.post('/food', createFood);
foodRouter.put('/foods/:id', updateFood);
foodRouter.delete('/foods/:id', deleteFood);

function getFood(req, res) {
  let allFoods = foodItems.get();
  res.status(200).json(allFoods);
}

function getOneFood(req, res) {
  let id = parseInt(req.params.id);
  let food = foodItems.get(id);
  res.status(200).json(food);
}

// CREATE
function createFood(req, res) {
  let obj = req.body;
  let newFood = foodItems.create(obj);
  res.status(201).json(newFood);
}

// UPDATE
function updateFood (req, res) {
  let id = parseInt(req.params.id);
  let content = req.body;
  let updated = foodItems.update(id, content);
  res.status(200).json(updated);
}

// DELETE
function deleteFood (req, res) {
  let id = parseInt(req.params.id);
  let deleted = foodItems.delete(id);
  res.status(204).send('item, and hopes, deleted');
}

module.exports = foodRouter;
