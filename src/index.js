const { getUsers } = require('./genusers');
const { renderUser } = require('./render');

const users = getUsers();
users.sort((a,b) => a.name < b.name ? -1 : 1);

window.addEventListener('hashchange', () => {
  const id = parseInt(window.location.hash.slice(1));
  userList.innerHTML=users.map((c,idx) => {
    return renderUser(idx, c, id);
  } ).join('');
})

const userList = document.querySelector("#user-list");
userList.innerHTML=users.map((c,idx) => renderUser(idx,c,null)).join('');