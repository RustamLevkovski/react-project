// конфигурация webpack сборки

// до применения в tsconfig "allowSyntheticDefaultImports": true, import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from'webpack'; //to access built-in plugins
import path from 'path'; 



import { buildPlugins } from './config/build/buildPlugins';
import { buildLoaders } from './config/build/buildLoaders';
import { buildResolvers } from './config/build/buildResolvers';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }
  
  const mode = env.mode || 'development';
  
  const isDev = mode === 'development'; 
  const port = env.port || 3000;
  
  const config: webpack.Configuration = buildWebpackConfig({
    mode: mode, 
    paths: paths,
    isDev: isDev,
    port: port
  });

  return config
}



// const paths: BuildPaths = {
//   entry: path.resolve(__dirname, 'src', 'index.ts'),
//   build: path.resolve(__dirname, 'build'),
//   html: path.resolve(__dirname, 'public', 'index.html')
// }

// const mode = 'development';

// const isDev = mode === 'development'; 
// const port = 3000;

// const config: webpack.Configuration = buildWebpackConfig({
//   mode: mode, 
//   paths: paths,
//   isDev: isDev,
//   port: port
// });

// const config: webpack.Configuration = {
//     mode: 'development',
//     entry: path.resolve(__dirname, 'src', 'index.ts'), 
//     output: {
//         filename: '[name].[contenthash].js',
//         path: path.resolve(__dirname, 'build'),
//         clean: true
//     }, 
//     // plugins: [
//     //     new HtmlWebpackPlugin({
//     //         title: 'My App',
//     //         template: path.resolve(__dirname, 'public', 'index.html')
//     //       }),
//     //       new webpack.ProgressPlugin()
//     // ], 
//     // после декомпозиции
//     plugins: buildPlugins(),
//     module: {
//         // rules: [ // конфигурируем лоадеры, которые обрабатывают файлы, которые выходят за рамки js. 
//         //     {
//         //       test: /\.tsx?$/, // указываем регулярное выражение, по которому будет происходить поиск файлов, которые надо будет пропустить через loader (ts & tsx)
//         //       use: 'ts-loader',
//         //       exclude: /node_modules/ // исключаем node-modules
//         //     },
//         //   ],  
//         rules: buildLoaders()
//     },
//       // resolve: {
//       //   extensions: ['.tsx', '.ts', '.js'], // расширения тех файлов, для которых при импорте мы не будем указывать расширения
//       // }, 
//       resolve: buildResolvers()
// }

// export default config;

// было до использования ts
// module.exports = {
//     mode: 'development',
//     entry: path.resolve(__dirname, 'src', 'index.ts'), 
//     output: {
//         filename: '[name].[contenthash].js',
//         path: path.resolve(__dirname, 'build'),
//         clean: true
//     }, 
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: 'My App',
//             template: path.resolve(__dirname, 'public', 'index.html')
//           }),
//           new webpack.ProgressPlugin()
//     ], 
//     module: {
//         rules: [ // конфигурируем лоадеры, которые обрабатывают файлы, которые выходят за рамки js. 
//             {
//               test: /\.tsx?$/, // указываем регулярное выражение, по которому будет происходить поиск файлов, которые надо будет пропустить через loader (ts & tsx)
//               use: 'ts-loader',
//               exclude: /node_modules/ // исключаем node-modules
//             },
//           ],  
//     },
//       resolve: {
//         extensions: ['.tsx', '.ts', '.js'], // расширения тех файлов, для которых при импорте мы не будем указывать расширения
//       }, 
// }


//аналог export, но для node.js

// __dirname - папка в который мы на данный момент находимся, в данной случае - корень. Далее через запятую указываем участки пути. resolve - генерит путь.
//entry - стартовая точка приложения
//output - куда и как мы будем делать сборку нашего приложения
//filename - название для главного файла нашей прилы
//path - путь до папки, где должен этот файл быть создан. 
//mode - указываем версию сборки development или production (в данном случае webpack максимально оптимизирует код, убриает комментарии и т.д. - минификация)
// [name] - щаблон для имени бандла, [contenthash] - уникальные ID для разных бандлов (для кэширования)
//  clean - true/false - для удаления предыдуших бандлов
// HtmlWebpackPlugin - generates an HTML file for your application and automatically injects all your generated bundles into this file.