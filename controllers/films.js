var films = require('../client/src/models/films.js')
var express = require('express')
var filmRouter = new express.Router()

var films = new Films()

filmRouter.get('/', function(req, res){
  res.json(films)
})

filmRouter.get('/:id', function(req, res){
  res.json({data: films[req.params.id]})
})

filmRouter.put('/:id', function(req, res){
  films[req.params.id] = req.body.film
  res.json(films)
})

filmRouter.post('/', function(req, res){
  films.splice(req.params.id, 1)
  res.json(films)
})



module.exports = filmRouter 