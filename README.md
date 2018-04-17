# botKeeper
Node.js - product and inventory api
 
 Instructions:
    Launch server,

    url input options: (prepend {localhost:PORT#/} if running on local server)

        input : http://autumn-resonance-1298.getsandbox.com/products
            returns: all products and prices from exampleProducts.js file
        
        input: http://autumn-resonance-1298.getsandbox.com/products/:productName
            returns: :productName and price for selected product if product exists in exampleProducts.js
        
        input: http://autumn-resonance-1298.getsandbox.com/inventory
            returns: all products and inventory levels from exampleProducts.js file

        input: http://autumn-resonance-1298.getsandbox.com/inventory/:productName
            returns: :productName and inventory level for selected product if product exists in exampleProducts.js