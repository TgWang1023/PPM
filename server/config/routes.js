const products = require('../controllers/products.js');
module.exports = function(app) {
    app.get('/products', function(req, res) {
        products.all(req, res);
    });
    app.get('/products/:id', function(req, res) {
        products.one(req, res);
    });
    app.post('/products', function(req, res) {
        products.create(req, res);
    });
    app.put('/products/:id', function(req, res) {
        products.update(req, res);
    });
    app.delete('/products/:id', function(req, res) {
        products.remove(req, res);
    });
}