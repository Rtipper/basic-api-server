  'use strict';

const express = require('express');
const Clothes = require('../models/clothes.js');
const clothes = new Clothes();
const clothesRoute = express.Router();


clothesRoute.get('/clothes', getItems);
clothesRoute.get('/clothes/:id', getItem);
clothesRoute.post('/clothes', createItem);
clothesRoute.put('/clothes/:id', updateItem);
clothesRoute.delete('/clothes/:id', deleteItem);

function getItems(req, res){
  let all = clothes.read();
  res.status(200).json(all);
}

//GET
function getItem(req, res){
  let id = parseInt(req.params.id);
  let item = clothes.read(id);
  res.status(200).json(item);
}

//CREATE
function createItem(req, res){
  let obj = req.body;
  let newItem = clothes.create(obj);
  res.status(201).json(newItem);
}

//UPDATE
function updateItem(req, res) {
  let id = parseInt(req.params.id);
  let content = req.body;
  let updated = clothes.update(id, content);
  res.status(200).send(updated);
}

//DELETE
function deleteItem(req, res) {
  let id = parseInt(req.params.id);
  let deleted = clothes.delete(id);
  res.status(204).json(deleted);
}

module.exports = clothesRoute;
