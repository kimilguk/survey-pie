const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./src/server/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(8888, () => {
    console.log("JSON Server is running");
});