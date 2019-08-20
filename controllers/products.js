const products = [];

exports.getADDProduct = (req, res, next) => {
    res.render("add-product", {
      pageTitle: "Add-Product",
      path: "/add-product",
      // formsCSS: true,
      // productCSS: true,
      // activeADDProduct: true
    });
  };

  exports.postADDProduct = (req, res, next) => {
    if (req.body.title !== "") products.push({ title: req.body.title });
    res.redirect("/");
  };

  exports.getProduct = (req, res, next) => {
    // console.log(adminData.products);
    // console.log(adminData.products.length);
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      // hasProducts: products.length > 0,
      // activeShop: true,
      // productCSS: true
    });
  };

