GETTING STARTED WITH HTTP
=========================

Client and Server communication through a browser usually works over one of two protocols

- HTTP
  - port: 80
- HTTPS
  - port: 443

Today we will focus soley on HTTP. You can read more about http <a href="http://www.restapitutorial.com/lessons/httpmethods.html" target="_blank">here</a>

As we start building out this communcation bridge with HTTP it is important we strive build an api that is RESTful. 

REST is a pattern that you can read more about <a href="http://portal.boisecodeworks.com/#/my-path/Node%20JS/Intro/RESTful%20-%20API's/1?type=t" target="_blank">here</a>


###Managing Users

As you are building your api it is important to keep in mind the HTTP Methods and the CRUD Accroynm 

***CRUD***
- server.post   == CREATE
- server.get    == READ
- server.put    == UPDATE
- server.delete == DELETE 


To work on building a simple api lets go ahead and create an object that will function as a temporary fake database.

```javascript
let db = {
  users: [],
  tasks: []
}
```

We will want to setup a few methods which will allow us to write and read data from this fake database coupled together with some HTTP Methods.

```javascript
let uuid = require('uuid')


server.post('/user', function(req, res) { 
  //YOUR CODE HERE TO SAVE THE REQ.BODY TO THE FAKEDB USERS
  //YOU WILL WANT TO ENSURE THAT EACH USER GETS A UNIQUE ID
  //ITS EASY WITH A NODE PACAKGE NAMED UUID

  //let user = ...... GET THE DATA FROM THE REQ.BODY
  user.id = uuid.v1()
  //NOW ADD YOUR USER TO THE db.users
})
server.get('/users/:id', function(req, res) {
  //NOTICE THE :id ^^^ THis is considered a route parameter
  //You can get it through the req
  let userId = req.params.id
  //GET THE USER FROM THE FAKE DB AND SEND THE OBJECT TO THE CLIENT
})
server.put('/users/:id', function(req, res) {
  //FIND THE USER BY ID
  let userId = req.params.id
  //ALLOW THE USER OBJECT TO BE EDITED WITH THE DATA FROM REQ.BODY
  //CAUTION DO NOT ALLOW THE USER.ID TO BE MODIFIED BY THE REQ.BODY
})
//IMPORTANT NOTE DELETE METHODS CANNOT CONTAIN A REQUEST BODY
server.delete('/users/:id', function(req, res) {
  //FIND THE USER BY ID
  let userId = req.params.id
  //REMOVE THE USEROBJ FROM THE DB.USERS
})
```

###Adding Tasks

With all of these methods setup lets now add the same methods for tasks, 
however we want to make sure that anytime a task is created or modified 
it must have the userId associated. 

```javascript
server.post('/tasks', function(req, res){
  //YOUR REQ.BODY SHOULD HAVE A USERID FIELD
})
server.get('/tasks/:userId', function(req, res){
  //LETS ONLY SEND BACK TASKS FOR THE SPECIFIED USER
})
server.put('/tasks/:id/:userId', function(req, res){
  //Allows a task to be edited if the req.params.userId matches the task.userId
  //OF COURSE AS ABOVE DO NOT ALLOW THE ID OR USERID TO CHANGE
})
//REMEMBER DELETE METHODS DO NOT CONTAIN A REQUEST BODY
server.delete('/tasks/:id/:userId', function(req, res){
  //Allows a task to be deleted if the req.params.userId matches the task.userId
})
```

> IMPORTANT This is going to be frustrating but each time you restart your server your data will be gone.
  it might be helpful to hardcode in some data into your fake db especially when you get to the edits

```javascript

let db = {
  users: [{
    id: '109156be-c4fb-41ea-b1b4-efe1671c5836'
    name: 'Jake'
  }],
  tasks: [{
    id: '109156be-c4fb-41ea-b1b4-efe1671c5837',
    userId: '109156be-c4fb-41ea-b1b4-efe1671c5836',
    task: 'Walk the dog'
  }]
}

```


## Legal Overview

The content under the CodeWorks®, LLC Organization and all of the individual repos are soley intended for use by CodeWorks Instruction to deliver Educational content to CodeWorks Students.

---

## Copyright

© CodeWorks® LLC, 2021. Unauthorized use and/or duplication of this material without express and written permission from CodeWorks, LLC is strictly prohibited.


<img src="https://bcw.blob.core.windows.net/public/img/7815839041305055" width="125">




