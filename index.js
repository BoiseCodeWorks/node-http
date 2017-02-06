console.log("WOOT NODE IS AWESOME")
let express = require('express')
let server = express()
let bodyParser = require('body-parser')
let uuid = require('uuid')

let db = {
  users: [],
  tasks: []
}


server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.post('/users', function (req, res) {
  let username = req.body.username
  let password = req.body.password
  let id = uuid.v1()
  let user = {
    name: username,
    password: password,
    id: id
  }

  db.users.push(user)

  res.send(user)
})

server.get('/users/:id', function (req, res) {
  let userId = req.params.id;
  let user = _findUserById(userId)
  if (user) {
    res.send(user)
  }
  res.send(new Error('Invalid userId'))
})

server.put('/users/:id', function (req, res) {
  let userId = req.params.id;
  let user = _findUserById(userId)
  if (user) {
    user.name = req.body.name
    return res.send(user)
  }
  return res.send(new Error('BAD ID BUDDY'))
})


server.delete('/users/:id', function (req, res) {
  let userId = req.params.id;
  for(var i = 0; i < db.users.length; i++){
    let user = db.users[i]
    if (user.id == userId) {
      db.users.splice(i, 1)
      return res.send({message: 'Successfully removed user'})
    }
  }
  return res.send(new Error('BAD ID BUDDY'))
})




function _findUserById(id) {
  for (var i = 0; i < db.users.length; i++) {
    var user = db.users[i];
    if (user.id == id) {
      return user
    }
  }
}




server.get('/', function (req, res) {
  res.send({ woot: 'node is awesome' })
})

server.get('/captain', function (req, res) {
  res.sendFile(__dirname + '/category-captain.jpg')
})


server.listen(8080, function () {
  console.log('THE SERVER IS RUNNING ON PORT 8080')
})





server.get('/product/:productName/:productId', function(req, res){
  findProductById(req.params.productId)
})



