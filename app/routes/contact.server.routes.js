
module.exports = function(app) {
    var contact = require('../controllers/contact.server.contoller');
    app.get('/contact', contact.render);
};