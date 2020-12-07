(function () {
    var config = PriceSpider.widgetConfigs['5e41e41ae2c0ce001f9eecfb'];

    // GA analytics start
    config.on("open", function (widget) {
        if (typeof ga === "function") {
            ga("send", "event", "PS Product - WTB Button Click", widget.skuKey, widget.products[0].name);
        }
    });

    config.on("redirect", function (widget, productSeller) {
        if (typeof ga === "function") {
            ga("send", "event", "PS Product - Online Seller Click", widget.skuKey, productSeller.seller.name);
        }
    });
    // GA analytics end

})();