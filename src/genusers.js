const faker = require('faker')

const getUsers = ()  => {
  if (window.localStorage.getItem('users')) {
    return JSON.parse(window.localStorage.getItem('users'));
  }

  const users = new Array(50).fill('').map(_ => faker.helpers.userCard())
  window.localStorage.setItem('users', JSON.stringify(users))
  return users;
}

module.exports = {
  getUsers
}