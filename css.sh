# run for css support:
npm install --save-dev style-loader css-loader

# add to webpack.config.js for css support:
# module: {
#   rules: [
#     {
#       test: /\.css$/i,
#       use: ['style-loader', 'css-loader'],
#     },
#   ],
# },

# run for scss support:
npm install sass-loader sass --save-dev

# modify the css config to:
# module: {
#   rules: [
#     {
#       test: /\.css$/i,
#       use: ['style-loader', 'css-loader', 'sass-loader'],
#     },
#   ],
# },

# für file loader (deprecated):
npm install --save-dev file-loader

# module: {
#     rules: [
#       {
#         test: /\.scss$/i,
#         use: [
#           {
#             loader: 'file-loader',
#             options: {
#               outputPath: 'css/',
#               name: '[name].min.css',
#             },
#           },
#           'sass-loader',
#         ],
#       },
#     ],
#   },

# neu seit webpack5: asset modules: https://webpack.js.org/guides/asset-modules/
# brauchte kein npm install
#  module: {
#     rules: [
#       {
#         test: /\.scss$/i,
#         type: 'asset/resource',
#         generator: {
#           filename: '[name].min.css',
#         },
#         use: ['sass-loader'],
#       },
#     ],
#   },