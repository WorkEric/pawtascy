const compression = require('compression');
var express = require('express');
const bodyParser = require('body-parser-graphql');
var graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');
const models = require('./models/index.js')

const PORT = process.env.NODE_ENV === 'production' ? 5000 : 9000;


// Create an express server and a GraphQL endpoint
var app = express();
app.use(compression());

function startApp(port) {
    app.listen(port, () => console.log(`Running a GraphQL API server at localhost:${port}/api`));
}

models.sequelize.sync()
    .then(() => {
        startApp(PORT);
    })
    .catch((e) => {
        throw new Error(e);
    });

app.use(bodyParser.graphql());


app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV !== 'production',
    pretty : true    
}));

// app.listen(4000, () => console.log('Express graphql server running on port 4000'));
module.exports = app;

