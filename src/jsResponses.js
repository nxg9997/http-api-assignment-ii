const fs = require('fs');

const clientJs = fs.readFileSync(`${__dirname}/../client/client.js`);


const getClientJs = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/javascript' });
  res.write(clientJs);
  res.end();
};

module.exports.getClientJs = getClientJs;
