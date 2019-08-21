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

exports.getProduct = (req, res, next) => {
  // console.log(adminData.products);
  // console.log(adminData.products.length);
  Product.fetchAll((products)=>{
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Product List",
      path: "/"
      // hasProducts: products.length > 0,
      // activeShop: true,
      // productCSS: true
    });
  });
};
