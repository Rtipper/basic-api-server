'use strict';

const express = require('express');
const Food = require('../models/food.js');

const food = new Food();
const foodRoute = express.Router();

foodRoute.get('/food', getItems);
foodRoute.get('/food/:id', getItem);
foodRoute.post('/food', createItem);
foodRoute.put('/food/:id', updateItem);
foodRoute.delete('/food/:id', deleteItem);


function getItems(req, res){
  let all = food.read();
  res.status(200).json(all);
}

//GET
function getItem(req, res){
  let id = parseInt(req.params.id);
  let item = food.read(id);
  res.status(200).json(item);
}

//CREATE
function createItem(req, res){
  let obj = req.body;
  let newItem = food.create(obj);
  res.status(201).json(newItem);
}

//UPDATE
function updateItem(req, res) {
  let id = parseInt(req.params.id);
  let content = req.body;
  let updated = food.update(id, content);
  res.status(200).send(updated);
}

//DELETE
function deleteItem(req, res) {
  let id = parseInt(req.params.id);
  let deleted = food.delete(id);
  res.status(204).send('Item successfully deleted..');
}


module.exports = foodRoute;
