const http = require('http')
const app = require("./app")
const { db, Page, User } = require('./models');
const server = http.createServer(app)

db.authenticate().
then(() => {
  console.log('connected to the database');
})

const init = async () => {
    // await Page.sync();
    // await User.sync();
    await db.sync()
}

const PORT = 3000;

server.listen(PORT, () => {
    console.log('server is listening on port', 3000)
})

init();