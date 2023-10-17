import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack, { WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins( {paths}: BuildOptions ): WebpackPluginInstance[] {
    return  [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: paths.html
          }),
          new webpack.ProgressPlugin(),
          // данный плагин позволяет выносить css файл в отдельный. 
          new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
          })
    ]
}