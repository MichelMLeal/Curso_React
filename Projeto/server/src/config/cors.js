module.exports = (request, response, next) => {
    response.header("Acess-Control-Alow-Origin", "*");
    response.header("Acess-Control-Alow-Mathods", "GET, POST, PUT, DELETE");
    response.header("Acess-Control-Alow-Headers", "Origin, X-Request-With, Content-Type, Accept");
    next();
}