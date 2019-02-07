const path = require('path')
const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = (env, options) => {
  console.log(`Running Webpack in mode: ${options.mode}`)
  const PRODUCTION = options.mode === 'production'
  return {
    entry: ['./app/js/index.ts'],
    output: {
      filename: 'bundle.js'
    },
    watch: PRODUCTION ? false : true,
    devServer: {
      disableHostCheck: true,
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
      }),
      new StyleLintPlugin(),
    ],
    optimization: {
      minimizer: PRODUCTION ? [
        new TerserPlugin({
          terserOptions: {
            ecma: 6,
            compress: true,
            output: {
              comments: false,
              beautify: false,
            }
          }
        })
      ] : []
    },
    devtool: 'sourcemap',
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loaders: 'style-loader!css-loader',
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loaders: 'style-loader!css-loader!sass-loader',
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          loaders: 'html-loader',
        },
        {
          test: /\.(eot|svg|ttf|woff)$/,
          loader: 'file-loader?name=[name]-[hash].[ext]',
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, "app"), "node_modules"],
      alias: {
        vue: 'vue/dist/vue.esm.js',
        bootstrapJs: 'bootstrap/dist/js/bootstrap.min.js',
        jquery: 'jquery/dist/jquery.min.js',
        MIXINS: path.resolve(__dirname, "app/js/mixins"),
        COMPONENTS: path.resolve(__dirname, "app/js/components"),
        TEMPLATES: path.resolve(__dirname, "app/templates/"),
        INTERFACES: path.resolve(__dirname, "interfaces/"),
        ASSETS: path.resolve(__dirname, "app/assets/"),
        ROOT_JS: path.resolve(__dirname, "app/js")
      },
    }
  }
};
