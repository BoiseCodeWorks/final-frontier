let router = require('express').Router()
let Stars = require('../models/star-model')


router.post('/stars', (req, res) => {
  Stars.create(req.body).then(star => {
    res.send({ message: 'Successfully created a star', data: star })
  }).catch(err => {
    res.send({ error: err })
  })
})

router.get('/stars', (req, res) => {
  Stars.find().then(stars => {
    res.send({ data: stars })
  })
})

router.get('/stars/:id', (req, res) => {
  Stars.findById(req.params.id).then(star => {
    res.send({ data: star })
  })
})

// BAD BAD BAD DONT DO THIS
// router.get('/stars/galaxy', (req, res)=>{
//   Stars.find().then(stars => {
//     res.send(stars)
//   })
// })




module.exports = router