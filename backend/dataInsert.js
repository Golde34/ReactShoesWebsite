const bcrypt = require('bcryptjs');

//   module.exports = dataImport; 

var mysql = require('mysql');
var con = mysql.createConnection({  
    host: "localhost",  
    user: "root",  
    password: "123456",  
    database: "project_web"  
});  
con.connect(function(err) {  
    if (err) throw err;  
    console.log("Connected!");  
    var sqlUser = "INSERT INTO users (userEmail, userPassword, userFname, userLname, address, phone, isAdmin) VALUES ?";
    var sqlProducts = "INSERT INTO products(idProduct, productName, productPrice, productDescription, idBrand, idCategory) VALUES ?"  
    var sqlBrand = "INSERT INTO brands(idBrand, brandName) VALUE ?";
    var sqlCategories = "INSERT INTO categories(idCategory, categoryName) VALUE ?";
    var sqlProductSize = "INSERT INTO productsizes(idSize, idProduct, quantityInStock, productSize) VALUE ?";
    var sqlProductDetail = "INSERT INTO productdetail(idProduct, idImage, image) VALUE ?;"
    array = [];
    console.log(dataImport["productsizes"][0]);
    dataImport["productsizes"].forEach(element => {
        array.push(Object.values(element));
    });
    console.log(array);
    con.query(sqlProductSize, [array], function (err, result) {  
        if (err) throw err;  
        console.log("Number of records inserted: " + result.affectedRows);  
    });
});