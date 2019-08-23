const Product = require("../models/product");

exports.getADDProduct = (req, res, next) => {
    res.render("admin/add-product", {
      pageTitle: "Add-Product",
      path: "/add-product"
      // formsCSS: true,
      // productCSS: true,
      // activeADDProduct: true
    });
  };
  
  exports.postADDProduct = (req, res, next) => {
    // if (req.body.title !== "") { 
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const products = new Product(title, imageUrl, price, description);
      products.save();
      res.redirect("/");
  };
  
  exports.getProducts = (req, res, next) => {
    Product.fetchAll((products)=>{
        res.render("admin/products", {
          prods: products,
          pageTitle: "Admin Products",
          path: "/admin/products",
        });
      });
  };