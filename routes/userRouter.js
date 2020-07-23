const express = require('express')
const userRouter = express.Router()
const cors = require('cors')
const models = require('../models')
userRouter.use(cors())

process.env.SECRET_KEY = 'secret'


// create a user : register
userRouter.post('/register', (req, res) => {
    const today = new Date()
    const userData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        createdAt: today
    }
    models
        .User
        .findOne({
            where: {
              email: req.body.email
            }
        })
        .catch(err => res.send(err))
})


// Display user from its ID
userRouter.get('/:id', (req,res) => {
  models
    .User
    .findOne({
      where: {
        user_ID : req.params.id
      }
    })
    .then(res.send("user selected"))
});

// Display user from its email
userRouter.post('/login', (req, res) => {
  models
  .User
  .findOne({
    where: {
      email: req.body.email
    }
  })
  .then(x => res.json(x))
})


// Update user information from its ID
userRouter.put('/:id', (req,res) => {
  models
  .User
  .findOne({
    where: {
      user_ID: req.body.user_ID
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

// Display all users :
userRouter.get('/', (req,res) => {
  models
    .User
    .findAll({include:[models.Pal]})
    .then(x => res.json(x))

  }
)

// Delete user from its ID
userRouter.delete('/:id', (req,res) => {
  models
    .User
    .destroy({
      where: {
        user_ID : req.params.id
      }
    })
    .then(res.send("user deleted"))
});


module.exports = userRouter
