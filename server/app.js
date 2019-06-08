var express = require('express');
const bodyParser = require('body-parser-graphql');
var express_graphql = require('express-graphql');
var {buildSchema} = require('graphql');

// GraphQL Schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);

var root = {
    message: () => 'Hello World!'
};

// app.use(bodyParser.graphql());

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true,
    pretty : true    
}));

app.listen(4000, () => console.log('Express graphql server running on port 4000'));
