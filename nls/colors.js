//avocado/nls/colors.js contents:
define({
    "root": {              // 1
        "red": "red",
        "blue": "blue",
        "green": "green"
    },

    "fr-fr": true // 2
});

// 1) root is the property of an object literal, which defines this whole module
// 2) "fr-fr" stands for the French locale;
//    "true" stands for "add the french translation to a file for the fr-fr locale"


/*


//my/nls/colors.js contents:     // 3
define({
    "root": true,
    "fr-fr": true,
    "fr-fr-paris": true
});



*/
// 3) Option A:
// If you prefer to not include the root bundle in the top level module, 
// you can define it like a normal locale bundle. 
// In that case, the top level module would look like this.