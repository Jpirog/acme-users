const renderUser = (idx, c, id ) => {
  const html1 = `<li><a href='#${idx}'>${c.name}</a>`
  const html3 = (idx === id) ? `<br>Email: ${c.email}<br>Phone: ${c.phone}<br>User name: ${c.username}` : '';
  const html2 = '</li>'
  return html1 + html3 + html2;
}

module.exports = {
  renderUser
}