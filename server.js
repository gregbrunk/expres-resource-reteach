var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var candies = [
  {
    "id": 1,
    "name": "Chewing Gum",
    "color": "Red"
  },
  {
    "id": 2,
    "name": "Pez",
    "color": "Green"
  },
  {
    "id": 3,
    "name": "Marshmallow",
    "color": "Pink"
  }
];

//Get All Candies
app.get('/candies', function(req, res){
  res.send(candies);
});

//Get Candies By ID
app.get('/candies/:id', function(req, res){
  var foundCandy;
  var targetId = parseInt(req.params.id);
    for(var i = 0; i <candies.length; i++){
      if(candies[i].id === targetId){
        foundCandy = candies[i];
      }
    }
  res.send(foundCandy);
});

//Post New Candy
var nextId = 1;
app.post('/candies', function(req, res){
  var newCandy = req.body;
  if (newCandy.id === undefined) {
    newCandy.id = nextId;
    nextId++;
  }
  candies.push(newCandy);
  res.send(newCandy);
});

//Update Candy
app.put('/candies/:id', function(req, res){
  var updatedCandy = req.body;
  res.send(updatedCandy);
});

//Delete Candies
app.delete('/candies/:id', function(req, res){
  var removedCandy = req.body;
  res.send(removedCandy);
});

app.listen(3000);
console.log("Server listening on port 3000");