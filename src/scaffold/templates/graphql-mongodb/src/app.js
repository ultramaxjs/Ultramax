const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const connectDB = require('./config/database');

// Connect to MongoDB
connectDB();

const app = express();

// Setup Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.use(express.json());

module.exports = app;
