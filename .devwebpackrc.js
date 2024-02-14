import path from 'path'
import {fileURLToPath} from 'url'

import webpack from 'webpack'
import server from 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import 'dotenv/config'

const file = fileURLToPath(import.meta.url)
const directory = path.dirname(file)

const config = {
  devServer: {
    host: process.env.HOST,
    open: true,
    port: process.env.PORT,
  },
  entry: {
    script: {
      import: path.join(directory, 'src', 'index.tsx'),
      filename: '[contenthash].js',
      dependOn: undefined,
      chunkLoading: 'jsonp', // import
      asyncChunks: true,
      layer: undefined,
    },
  },
  loader: {},
  mode: 'development',
  module: {
    defaultRules: [],
    generator: {
      asset: {
        dataUrl: {
          encoding: 'base64',
          mimetype: undefined,
        },
        emit: true,
        filename: '[path][name][ext]',
        publicPath: '/',
        outputPath: '',
      },
      'asset-inline': {
        dataUrl: {
          encoding: 'base64',
          mimetype: undefined,
        },
        emit: true,
        filename: '[path][name][ext]',
        publicPath: '/',
        outputPath: '',
      },
      'asset-resource': {
        emit: true,
        filename: '[path][name][ext]',
        publicPath: '/',
        outputPath: '',
      },
      css: {
        exportsOnly: false,
      },
      'css/auto': {
        exportsOnly: false,
      },
      'css/global': {
        exportsOnly: false,
      },
      'css/module': {
        exportsOnly: false,
      },
    },
    noParse: undefined,
    parser: {
      asset: {},
      javascript: {
        commonjsMagicComments: true,
        dynamicImportFetchPriority: 'high',
        dynamicImportMode: 'lazy',
        dynamicImportPrefetch: true,
        dynamicImportPreload: true,
        exportsPresence: 'error',
        importExportsPresence: 'error',
        importMeta: false,
        importMetaContext: false,
        reexportExportsPresence: 'error',
        requireEnsure: true,
        url: 'relative',
      },
      'javascript/auto': {
        requireEnsure: true,
      },
      'javascript/dynamic': {
        requireEnsure: true,
      },
      'javascript/esm': {
        requireEnsure: true,
      },
      css: {
        namedExports: true,
      },
      'css/auto': {
        namedExports: true,
      },
      'css/global': {
        namedExports: true,
      },
      'css/module': {
        namedExports: true,
      },
    },
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: '.typescriptrc.json',
            },
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif|eot|ttf|woff|woff2)$/,
        type: 'asset',
      },
      // {
      //   enforce: undefined,
      //   exclude: undefined,
      //   include: undefined,
      //   issuer: undefined,
      //   issuerLayer: undefined,
      //   layer: undefined,
      //   mimetype: undefined,
      //   oneOf: undefined,
      //   options: undefined,
      //   parser: {
      //     dataUrlCondition: undefined,
      //     parse: undefined,
      //   },
      //   generator: {
      //     dataUrl: {
      //       encoding: undefined,
      //       mimetype: undefined,
      //     },
      //     emit: undefined,
      //     filename: undefined,
      //     publicPath: undefined,
      //     outputPath: undefined,
      //   },
      //   resource: undefined,
      //   resourceQuery: undefined,
      //   scheme: undefined,
      //   sideEffects: undefined,
      //   test: undefined,
      // },
    ],
    unsafeCache: false,
  },
  name: 'Webpack',
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
  output: {
    filename: '[contenthash].js',
  },
  plugins: [
    new webpack.DefinePlugin({}),
    new HtmlWebpackPlugin({
      title: process.env.TITLE,
      // filename: undefined,
      template: path.join(directory, 'src', 'index.html'),
      templateContent: false,
      templateParameters: false,
      inject: true,
      publicPath: '/',
      scriptLoading: 'module',
      favicon: 'src/static/images/' + process.env.FAVICON,
      meta: {
        description: process.env.DESCRIPTION,
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      base: process.env.BASEURL,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: false,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      hash: false,
      cache: true,
      showErrors: true,
      chunks: '?',
      chunksSortMode: 'auto',
      excludeChunks: '',
      xhtml: false,
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json', '.scss'],
  },
  target: 'browserslist:last 2 versions',
  // watch: false,
}

export default config
