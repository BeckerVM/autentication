var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var mongoose = require('./db/mongoose');
var Todo = require('./models/todo');
var User = require('./models/user');
var app = express();


app.use(bodyParser.json());

/*app.post('/todos', (req, res) => {
    var todo = new Todo({
        text:  req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send(todos);
    }, (err) => {
        res.status(400).send(e);
    });
});


app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send(todo);
    }, (err) => {
        res.send(err);
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    Todo.findByIdAndRemove(id).then(() => {
        res.status(200).send();
    }, (err) => {
        res.status(400).send();
    });
});
*/
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);
    
    user.save().then((user) => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth').send(user);
    })
    .catch((err) => {
        res.status(400).send(err);
    });
});

app.listen(3000, () => {
    console.log('Starding in port 3000');
});

module.exports = {app};