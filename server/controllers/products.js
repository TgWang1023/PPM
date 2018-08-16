require('../models/product.js');
module.exports = {
    all: function(req, res){
        Product.find({}, function(err, products){
            if(err){
                console.log('Something went wrong when getting all products');
                res.json({message: 'Error', error: err});
            }else{
                res.json({message: 'Success', data: products});
            }
        });
    },
    one: function(req, res){
        Product.findOne({_id: req.params.id}, function(err, product){
            if(err){
                console.log('Something went wrong when getting a single product');
                res.json({message: 'Error', error: err});
            }else{
                res.json({message: 'Success', data: product});
            }
        });
    },
    create: function(req, res){
        Product.create(req.body, function(err){
            if(err){
                console.log('Something went wrong when creating a product, detail: ', err);
                res.json({message: 'Error', error: err});
            }else{
                res.redirect('/products');
            }
        });
    },
    update: function(req, res){
        Product.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, { runValidators: true }, function(err){
            if(err){
                console.log('Something went wrong when updating a product, detail: ', err);
                res.json({message: 'Error', error: err});
            }else{
                res.redirect(303, '/products');
            }
        });
    },
    remove: function(req, res){
        Product.findOneAndRemove({_id: req.params.id}, function(err){
            if(err){
                console.log('Something went wrong when updating a product');
                res.json({message: 'Error', error: err});
            }else{
                Product.find({}, function(err, products){
                    if(err){
                        console.log('Something went wrong when getting all products');
                        res.json({message: 'Error', error: err});
                    }else{
                        res.json({message: 'Success', data: products});
                    }
                });
            }
        });
    }
}