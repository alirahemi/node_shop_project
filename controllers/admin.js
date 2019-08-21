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
    if (req.body.title !== "") {
      const products = new Product(req.body.title);
      products.save();
      res.redirect("/");
    } else res.redirect("/");
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