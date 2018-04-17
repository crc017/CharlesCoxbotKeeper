var express = require("express");
var router = express.Router();
var exampleProducts = require('../exampleProducts');

//GET /inventory
router.get('/', function(req,res){
    var inventoryInfo = exampleProducts.map(exampleProduct => `Product: ${exampleProduct.description.toUpperCase()}   Inventory: ${exampleProduct.inventory}`);
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
    
    //Return product and inventory
    var inventoryInfo = itemSelection.map(item => `Product: ${item.description.toUpperCase()}. Inventory: ${item.inventory}`);
    res.send(inventoryInfo);
});

module.exports = router;