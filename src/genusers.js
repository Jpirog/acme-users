const faker = require('faker')

const getUsers = ()  => {
  const users = new Array(50).fill('').map(_ => faker.helpers.userCard())
  return users;
}

module.exports = {
  getUsers
}