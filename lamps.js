
//Contents of avocado/lamps.js
define(["i18n!avocado/nls/colors"], function(colors) {
    return {
        testMessage: "The name for red in this locale is: " + colors.red // 1
    }
});

// 1) "+ colors.red" = use the value of key "red" in module "colors.js"