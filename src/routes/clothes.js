'use strict';

const express = require('express');

const Clothes = require('../models/clothes.js');
const clothesItems = new Clothes();

const clothesRouter = express.Router();

// ROUTES
clothesRouter.get('/clothes', getClothes);
clothesRouter.get('/clothes/:id', getOneClothes);
clothesRouter.post('clothes', createClothes);
clothesRouter.put('/clothes/:id', updateClothes);
clothesRouter.delete('/clothes/:id', deleteClothes);

function getClothes(req, res) {
  let allClothes = clothesItems.get();
  res.status(200).json(allClothes);
}

function getOneClothes(req, res) {
  let id = parseInt(req.params.id);
  let clothes = clothesItems.get(id);
  res.status(200).json(clothes);
}

// CREATE
function createClothes(req, res) {
  let obj = req.body;
  let newClothes = clothesItems.create(obj);
  res.status(201).json(newClothes);
}

// UPDATE
function updateClothes (req, res) {
  let id = parseInt(req.params.id);
  let content = req.body;
  let updated = clothesItems.update(id, content);
  res.status(200).json(updated);
}

// DELETE
function deleteClothes (req, res) {
  let id = parseInt(req.params.id);
  let deleted = clothesItems.delete(id);
  res.status(204).send('item, and hopes, deleted');
}

module.exports = clothesRouter;
