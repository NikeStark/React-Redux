module.exports = { // empty configuration the same like export node.js
    mode: "development", // or production

    module: {
        rules: [ //collections rules how work with modules
            {
                test: /\.js$/,
                exclude: /node_modules/, // isn't passing through node_modules
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            // Loading images
            {
                test: /\.(png|jpg|gif|ico|jpeg)$/, //only those files with which we need work
                use: [
                    { 
                        loader: 'file-loader', //loader for change names files in order to it works without conflict
                        options: {
                            outputPath: 'images', //all images in this chapter, create automatically
                            name: '[name]-[sha1:hash:7].[ext]'
                        }  
                    }
                ] 
            },
            // Loading fonts
            {
                test: /\.(ttf|btf|eot|woff|woff2)$/, //only those files with which we need work
                use: [
                    { 
                        loader: 'file-loader', //loader for change names files in order to it works without conflict
                        options: {
                            outputPath: 'fonts', //all images in this chapter, create automatically
                            name: '[name].[ext]'
                        }  
                    }
                ] 
            }
        ]
    }
};