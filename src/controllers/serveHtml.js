const { join } = require('path');

const serveHtml = (fileName) => (req, res, next) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', `${fileName}.html`));
};

module.exports = { serveHtml };
