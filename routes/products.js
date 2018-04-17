var express = require("express");
var router = express.Router();
var exampleProducts = require('../exampleProducts');

//GET /products
router.get('/', function(req,res){
    var inventoryInfo = exampleProducts.map(exampleProduct => `Product: ${exampleProduct.description.toUpperCase()}   Price: ${exampleProduct.price}`);
    res.send(inventoryInfo);
});

//GET /inventory/:product
router.get('/:product', function (req, res) {
    var itemSelection = exampleProducts.filter(exampleProduct => exampleProduct.description === req.params.product.toLowerCase());
    
    //Handle Error
    if(itemSelection.length === 0){
        res.send("Selected item does not exist. Please select a valid product.")
    };
    //--------------

    //Return product and price
    var inventoryInfo = itemSelection.map(item => `Product: ${item.description.toUpperCase()}   Price: ${item.price}`);
    res.send(inventoryInfo);
});

module.exports = router;