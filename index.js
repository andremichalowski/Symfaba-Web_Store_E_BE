const server = require('./api/server.js');

const PORT = 4000;
server.listen(PORT, () => {console.log(`Server running on localhost:${PORT}`)})