const 
    webpack = require("webpack"),
    path    = require("path");

module.exports = {
    entry: './server.js',
    output: {
        path        : path.resolve(__dirname, 'dist/js'),
        filename    : 'bundle.js'
    },
    module: {
        rules   : [
            {
                test    : /\.js$/,
                include : path.join(__dirname),
                exclude : /node_modules/,
                use     : {
                    loader  : 'babel-loader',
                    options : {
                        presets : ['env']
                    }
                }
            }
        ]
    },

    mode: 'development'
};
    