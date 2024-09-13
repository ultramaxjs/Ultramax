const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getAllUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    deleteUser(id: ID!): User
    updateUser(id: ID!, name: String, email: String): User
  }
`;

module.exports = typeDefs;
