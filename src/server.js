const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');
const jsHandler = require('./jsResponses.js');
const cssHandler = require('./cssResponses.js');
const genericHandler = require('./genericResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (req, res) => {
  // console.log(req.method);
  const rawUrl = req.url.split('?')[0];
  if (req.method === 'GET') {
    switch (rawUrl) {
      case '/':
        htmlHandler.getIndex(req, res);
        break;
      case '/client.js':
        jsHandler.getClientJs(req, res);
        break;
      case '/style.css':
        cssHandler.getClientCss(req, res);
        break;
      case '/getUsers':
        jsonHandler.getUsers(req, res);
        break;
      default:
        jsonHandler.getNotFound(req, res);
        break;
    }
  } else if (req.method === 'HEAD') {
    switch (rawUrl) {
      case '/':
        genericHandler.sendResponse(req, res, 200);
        break;
      case '/getUsers':
        genericHandler.sendResponse(req, res, 200);
        break;
      default:
        genericHandler.sendResponse(req, res, 404);
        break;
    }
  } else if (req.method === 'POST') {
    switch (rawUrl) {
      case '/addUser':
        jsonHandler.postUser(req, res);
        break;
      default:
        genericHandler.sendResponse(req, res, 403);
        break;
    }
  }
};

http.createServer(onRequest).listen(port);
// console.log(`Listening on localhost:${port}`);
