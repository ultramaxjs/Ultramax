const userService = require('../services/userService');

const resolvers = {
  Query: {
    getAllUsers: () => userService.getAllUsers(),
    getUser: (_, { id }) => userService.getUserById(id),
  },
  Mutation: {
    createUser: (_, { name, email }) => userService.createUser({ name, email }),
    deleteUser: (_, { id }) => userService.deleteUser(id),
    updateUser: (_, { id, name, email }) => userService.updateUser(id, { name, email }),
  }
};

module.exports = resolvers;
