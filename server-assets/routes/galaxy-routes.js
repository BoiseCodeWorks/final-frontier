let express = require('express')
let router = express.Router()
let Galaxies = require('../models/galaxy-model')
let Stars = require('../models/star-model')

router.post('/galaxies', (req, res) => {
  let newGalaxy = req.body
  Galaxies.create(newGalaxy)
    .then(galaxy => {
      res.send({
        message: 'Successfully created a new galaxy',
        data: galaxy
      })
    })
    .catch(error => {
      res.send({
        error: error
      })
    })
})

router.get('/galaxies', (req, res) => {
  Galaxies.find()
    .then(galaxies => {
      res.send({ data: galaxies })
    }).catch(err => {
      res.send({ error: err })
    })
})

router.get('/galaxies/:id', (req, res) => {
  Galaxies.findById(req.params.id).then(galaxy => {
    res.send({
      data: galaxy
    })
  }).catch(err => {
    res.send({
      error: err
    })
  })
})


router.get('/galaxies/:galaxyId/stars/:starId?', (req, res) => {
  if(req.params.starId){
    // DO THIS LATER
  }

  Stars.find({galaxyId: req.params.galaxyId}).then(stars => {
    res.send({
      data: stars
    })
  }).catch(err => {
    res.send({
      error: err
    })
  })
})



module.exports = router
