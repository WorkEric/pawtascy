const { GraphQLSchema } = require('graphql');

const query = require('./graphql/queries/index.js');
// const mutation = require('./graphql/mutations/index.js');

module.exports = new GraphQLSchema({ query });
