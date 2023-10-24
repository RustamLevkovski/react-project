import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack, { type WebpackPluginInstance } from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    // данный плагин позволяет выносить css файл в отдельный.
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    // плагин веб-пака, в самое приложение можно передавать глобальные переменные
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
