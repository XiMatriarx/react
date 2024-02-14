import path from 'path'
import {fileURLToPath} from 'url'

import webpack from 'webpack'
import server from 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import 'dotenv/config'

const file = fileURLToPath(import.meta.url)
const directory = path.dirname(file)

const config = {
  amd: {},
  bail: false,
  cache: {
    allowCollectingMemory: true,
    buildDependencies: {
      config: [file],
    },
    cacheDirectory: path.join(directory, 'cache'),
    cacheLocation: path.join(directory, 'cache'),
    // cacheUnaffected: undefined,
    compression: 'brotli',
    hashAlgorithm: 'md4',
    idleTimeout: 60000,
    idleTimeoutAfterLargeChanges: 1000,
    idleTimeoutForInitialStore: 1000,
    maxAge: 600000,
    // maxGenerations: undefined,
    maxMemoryGenerations: 10,
    memoryCacheUnaffected: true,
    name: 'webpack',
    profile: true,
    readonly: true,
    store: 'pack',
    type: 'filesystem',
    version: '',
  },
  context: directory,
  dependencies: [],
  devServer: {
    allowedHosts: ['auto'],
    bonjour: false,
    client: {
      logging: 'verbose',
      overlay: {
        errors: true,
        warnings: true,
        runtimeErrors: true,
      },
      progress: true,
      reconnect: 10,
      webSocketTransport: 'ws',
      webSocketURL: {
        hostname: '0.0.0.0',
        pathname: '/ws',
        password: '',
        port: 4000,
        protocol: 'ws',
        username: 'webpack',
      },
    },
    compress: false,
    devMiddleware: {
      headers: undefined,
      index: 'index.html',
      methods: ['GET', 'POST'],
      mimeTypes: undefined,
      outputFileSystem: undefined,
      publicPath: '/',
      stats: undefined,
      serverSideRender: undefined,
      writeToDisk: false,
    },
    headers: {},
    historyApiFallback: true,
    host: process.env.HOST,
    hot: true,
    ipc: undefined,
    liveReload: false,
    onListening: undefined,
    open: true,
    port: process.env.PORT,
    proxy: [],
    server: {
      type: 'https',
      options: {},
    },
    setupExitSignals: true,
    setupMiddlewares: undefined,
    static: {
      directory: path.join(directory, 'lib'),
      staticOptions: {},
      publicPath: '/',
      serveIndex: true,
      watch: false,
    },
    watchFiles: {},
    webSocketServer: 'ws',
  },
  devtool: 'eval-source-map',
  experiments: {
    asyncWebAssembly: true,
    backCompat: true,
    buildHttp: undefined,
    cacheUnaffected: true,
    css: true,
    futureDefaults: true,
    layers: true,
    lazyCompilation: false,
    outputModule: true,
    syncWebAssembly: true,
    topLevelAwait: true,
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
  extends: undefined,
  externals: {},
  externalsType: 'var',
  externalsPresets: {},
  ignoreWarnings: [],
  infrastructureLogging: {
    appendOnly: true,
    colors: true,
    console: undefined,
    debug: false,
    level: 'verbose',
    stream: process.stderr,
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
  optimization: {
    chunkIds: 'named',
    concatenateModules: undefined,
    emitOnErrors: true,
    flagIncludedChunks: false,
    innerGraph: false,
    mangleExports: false,
    mangleWasmImports: false,
    mergeDuplicateChunks: false,
    minimize: false,
    minimizer: [],
    moduleIds: 'named',
    nodeEnv: undefined,
    portableRecords: undefined,
    providedExports: true,
    realContentHash: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    runtimeChunk: false,
    sideEffects: true,
    splitChunks: undefined,
    usedExports: false,
  },
  output: {
    assetModuleFilename: '[hash][ext][query]',
    asyncChunks: true,
    auxiliaryComment: undefined,
    charset: false,
    chunkFilename: '[id].js',
    chunkFormat: 'commonjs', // module
    chunkLoadTimeout: 60000,
    chunkLoadingGlobal: 'webpackChunkwebpack',
    chunkLoading: undefined,
    clean: true,
    compareBeforeEmit: true,
    crossOriginLoading: false,
    devtoolFallbackModuleFilenameTemplate:
      'webpack://[namespace]/[resource-path]?[loaders]',
    devtoolNamespace: 'script',
    enabledChunkLoadingTypes: undefined,
    enabledLibraryTypes: ['module'],
    enabledWasmLoadingTypes: ['fetch'],
    environment: {
      arrowFunction: true,
      asyncFunction: true,
      bigIntLiteral: true,
      const: true,
      destructuring: true,
      dynamicImport: true,
      dynamicImportInWorker: true,
      forOf: true,
      globalThis: true,
      module: true,
      optionalChaining: true,
      templateLiteral: true,
    },
    filename: '[contenthash].js',
    globalObject: 'self',
    hashDigest: 'hex',
    hashDigestLength: 20,
    hashFunction: 'md4',
    hashSalt: undefined,
    hotUpdateChunkFilename: '[id].[fullhash].hot-update.js',
    hotUpdateGlobal: undefined,
    hotUpdateMainFilename: '[runtime].[fullhash].hot-update.json',
    iife: true,
    ignoreBrowserWarnings: false,
    importFunctionName: 'import',
    library: {
      amdContainer: undefined,
      auxiliaryComment: undefined,
      export: undefined,
      name: undefined,
      type: 'module',
      umdNamedDefine: undefined,
    },
    module: true,
    path: path.join(directory, 'lib'),
    pathinfo: undefined,
    publicPath: '/',
    scriptType: 'module',
    sourceMapFilename: '[file].map[query]',
    sourcePrefix: '',
    strictModuleErrorHandling: true,
    trustedTypes: true,
    uniqueName: 'Script',
    wasmLoading: undefined,
    workerChunkLoading: 'import',
    workerPublicPath: '/',
  },
  parallelism: 100,
  performance: {
    assetFilter: (asset) => asset.endsWith('.js'),
    hints: 'warning',
    maxAssetSize: 4000000,
    maxEntrypointSize: 4000000,
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
  profile: true,
  recordsInputPath: path.join(directory, 'cache', 'records.json'),
  recordsOutputPath: path.join(directory, 'cache', 'newrecords.json'),
  recordsPath: path.join(directory, 'cache', 'records.json'),
  resolve: {
    alias: {
      '@source': path.join(directory, 'src'),
    },
    aliasFields: ['browser'],
    byDependency: {
      esm: {},
      commonjs: {},
      amd: {},
      umd: {},
      life: {},
      url: {},
    },
    cachePredicate: undefined,
    cacheWithContext: undefined,
    conditionNames: [],
    descriptionFiles: ['package.json'],
    enforceExtension: false,
    exportsFields: ['exports'],
    extensionAlias: {},
    extensions: ['.tsx', '.ts', '.js', '.json', '.scss'],
    fallback: {
      // assert: require.resolve('assert'),
      // buffer: require.resolve('buffer'),
      // console: require.resolve('console-browserify'),
      // constants: require.resolve('constants-browserify'),
      // crypto: require.resolve('crypto-browserify'),
      // domain: require.resolve('domain-browser'),
      // events: require.resolve('events'),
      // http: require.resolve('stream-http'),
      // https: require.resolve('https-browserify'),
      // os: require.resolve('os-browserify/browser'),
      // path: require.resolve('path-browserify'),
      // punycode: require.resolve('punycode'),
      // process: require.resolve('process/browser'),
      // querystring: require.resolve('querystring-es3'),
      // stream: require.resolve('stream-browserify'),
      // string_decoder: require.resolve('string_decoder'),
      // sys: require.resolve('util'),
      // timers: require.resolve('timers-browserify'),
      // tty: require.resolve('tty-browserify'),
      // url: require.resolve('url'),
      // util: require.resolve('util'),
      // vm: require.resolve('vm-browserify'),
      // zlib: require.resolve('browserify-zlib'),
    },
    importsFields: undefined,
    mainFields: ['browser', 'module', 'main'],
    mainFiles: ['index'],
    modules: ['node_modules'],
    plugins: [],
    preferRelative: true,
    preferAbsolute: true,
    restrictions: undefined,
    roots: undefined,
    symlinks: false,
    unsafeCache: false,
    useSyncFileSystemCalls: false,
  },
  resolveLoader: {
    modules: ['node_modules'],
    extensions: ['.js', '.json'],
    mainFields: ['loader', 'main'],
  },
  snapshot: {
    buildDependencies: {
      hash: true,
      timestamp: true,
    },
    immutablePaths: [],
    managedPaths: [],
    module: {
      hash: true,
      timestamp: true,
    },
    resolve: {
      hash: true,
      timestamp: true,
    },
    resolveBuildDependencies: {
      hash: true,
      timestamp: true,
    },
    unmanagedPaths: [],
  },
  stats: {
    all: undefined,
    assets: true,
    assetsSort: 'id',
    assetsSpace: 10,
    builtAt: true,
    cachedAssets: true,
    cachedModules: true,
    children: true,
    chunkGroupAuxiliary: true,
    chunkGroupChildren: true,
    chunkGroupMaxAssets: 10,
    chunkGroups: true,
    chunkModules: true,
    chunkModulesSpace: 10,
    chunkOrigins: true,
    chunkRelations: true,
    chunks: true,
    chunksSort: 'id',
    colors: true,
    context: path.join(directory, '.'),
    dependentModules: true,
    depth: true,
    entrypoints: true,
    env: true,
    errorDetails: true,
    errors: true,
    errorsCount: true,
    errorsSpace: 10,
    errorStack: true,
    excludeAssets: [],
    exclude: true,
    excludeModules: true,
    groupAssetsByChunk: true,
    groupAssetsByEmitStatus: true,
    groupAssetsByExtension: true,
    groupAssetsByInfo: true,
    groupAssetsByPath: true,
    groupModulesByAttributes: true,
    groupModulesByCacheStatus: true,
    groupModulesByExtension: true,
    groupModulesByLayer: true,
    groupModulesByPath: true,
    groupModulesByType: true,
    groupReasonsByOrigin: true,
    hash: true,
    ids: true,
    logging: 'verbose',
    loggingDebug: [],
    loggingTrace: true,
    moduleAssets: true,
    moduleTrace: true,
    modules: true,
    modulesSort: 'id',
    modulesSpace: 10,
    nestedModules: true,
    nestedModulesSpace: 10,
    optimizationBailout: true,
    orphanModules: true,
    outputPath: true,
    performance: true,
    preset: 'verbose',
    providedExports: true,
    publicPath: true,
    reasons: true,
    reasonsSpace: 1000,
    relatedAssets: true,
    runtimeModules: true,
    source: true,
    timings: true,
    usedExports: true,
    version: true,
    warnings: true,
    warningsCount: true,
    warningsSpace: 10,
  },
  target: 'browserslist:last 2 versions',
  // watch: false,
  watchOptions: {
    aggregateTimeout: 100,
    followSymlinks: false,
    ignored: /node_modules/,
    poll: 1000,
    stdin: true,
  },
}

export default config
