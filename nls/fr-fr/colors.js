//Contents of my/nls/fr-fr/colors.js
define({
    "red": "rouge",  // 1
    "blue": "bleu",
    "green": "vert"
});

// 1) if you exclude/take out a pair from here, then RequireJS will combine this bundle with the root bundle;
//    so if "red":"red" were missing, RequireJS will take the pair from the bundle at nls/colors.js .