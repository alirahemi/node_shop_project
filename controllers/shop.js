const Product = require("../models/product");



// console.log(adminData.products);
// console.log(adminData.products.length);
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products)=>{
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products"
    });
  });
};

exports.getProduct = (req, res, next) => {
  const proId = req.params.productId;
  Product.findById(proId, product => {
    console.log(product);
  })
  res.redirect('/');
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products)=>{
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    path: "/cart"
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Your Orders",
    path: "/orders"
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("/shop/checkout", {
    pageTitle: "Checkout",
    path: "checkout"
  });
};
