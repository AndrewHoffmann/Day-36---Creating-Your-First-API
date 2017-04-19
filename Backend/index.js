const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const cors = require('cors');             // request does not have to come from same domain

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

const data = [ //hardcode - name, age, id, and if they like Javascript or not.
  {
    id: 0,
    name: "Andy",
    age: 34,
    js: "Yes",
  },
    {
    id: 1,
    name: "Tucker",
    age: 22,
    js: "No",
  },
    {
    id: 2,
    name: "Miranda",
    age: 34,
    js: "Yes",
  },
    {
    id: 3,
    name: "Piper",
    age: 6,
    js: "No",
  },
    {
    id: 4,
    name: "Sable",
    age: 5,
    js: "No",
  }
];

// get all of people
app.get('/people',function(req,res){
  res.json(data)
})

// GET route - a single person.  loop thru see if ID matches ID looking for put into new arrau\uy.  filter is like forEach
app.get('/people/:id',function(req,res){
  let id = req.params.id;
  const onePerson = data.filter(person=>{
    if(person.id == id){
      return person;
    }
  })
  return res.json(onePerson);
})

// POST route - a new person (use Push).  creates new person, pushes the data, returns data
app.post('/people',function(req,res){
  let person = {"id": req.body.id, "name": req.body.name, "age": req.body.age, "js": req.body.js};
  data.push(person);
  res.json(data);
})

// DELETE route - a person (use Splice).  loop thru entire data (forEach), if ID matches ID looking for remove (Splice). index indicates which item in array to remove, 1 means remove just one item
app.delete('/people/:id',function(req,res){
  let id = req.params.id;
  data.forEach((person,index)=>{
    if(person.id == id){
      data.splice(index,1);
    }
  })

  res.json(data);
})

// ALWAYS at bottom, reads code and starts server
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});