const fs = require('fs');

const clientCss = fs.readFileSync(`${__dirname}/../client/style.css`);


const getClientCss = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/css' });
  res.write(clientCss);
  res.end();
};

module.exports.getClientCss = getClientCss;
