const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/todo-list", {useNewUrlParser: true});

mongoose.connection
    .once('open', () => {console.log('Connected')})
    .on('error', (error) => {
        console.log(error);
    })