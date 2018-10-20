const GitRevisionPlugin = require('git-revision-webpack-plugin')
const webpack = require('webpack')

const gitRevisionPlugin = new GitRevisionPlugin()
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'VERSION': JSON.stringify(gitRevisionPlugin.commithash()),
      })
    ]
  },
  lintOnSave: undefined
}
