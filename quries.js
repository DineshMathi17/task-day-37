// Find all the information about each products
db.productdata.find({}).pretty({}).toArray()

// Find the product price which are between 400 to 800
db.productdata.find({"product_price":{$gte:400,$lte:800}})

// Find the product price which are not between 400 to 600
db.productdata.find({"product_price":{$not:{$gte:400,$lte:600}}}).toArray()

// List the four product which are grater than 500 in price 
db.productdata.find({"product_price":{$gte:500}}).limit(4)

// Find the product name and product material of each products
db.productdata.find({},{"product_name":1,"product_price":1}).toArray()

// Find the product with a row id of 10
db.productdata.find({"id":"10"})

// Find only the product name and product material
db.productdata.find({},{"product_name":1,"product_price":1,"_id":0}).toArray()

// Find all products which contain the value of soft in product material 
db.productData.find({"product_material": "Soft"})

// Find products which contain product color indigo  and product price 492.00
db.productData.find({ $and :[{"product_color": "indigo"},{"product_price":492.00}]})

// Delete the products which product price value are same
db.productData.deleteMany({$and:[{"product_price":47},{"product_price":36}]})