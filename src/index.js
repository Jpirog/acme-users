console.log("Hello")
//const faker = require('faker')
//const users = new Array(50).fill('').map(_ => faker.helpers.userCard())
const {getUsers} = require('./genusers')
const users = getUsers();
//console.log(users)
console.log(users[0])

window.addEventListener('hashchange', () => {
  const id = parseInt(window.location.hash.slice(1));

  userList.innerHTML=users.map((c,idx) => {
    if (idx === id) console.log('equals, id=', idx);
    const html1 = `<li><a href='#${idx}'>${c.name}</a>`
    const html3 = (idx === id) ? `<br>Email: ${c.email}<br>Phone: ${c.phone}<br>User name: ${c.username}` : "<NOT EQUAL>";
    const html2 = '</li>'
    return html1 + html3 + html2;
  } ).join('');
})

const userList = document.querySelector("#user-list");
console.log(userList)

userList.innerHTML=users.map((c,idx) => `
<li><a href='#${idx}'>${c.name}</a></li> 
`).join('')