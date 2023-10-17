import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders( {isDev}: BuildOptions): RuleSetRule[] {
    // для каждого лоадера создаем свой объект, потому что порядок лоадеров имеет значение.
    const typeScriptLoader = 
    {        
            test: /\.tsx?$/, // указываем регулярное выражение, по которому будет происходить поиск файлов, которые надо будет пропустить через loader (ts & tsx)
            use: 'ts-loader',
            exclude: /node_modules/ // исключаем node-modules          
    };

    const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
          loader: "css-loader",
          options: {
            modules: {
              // путь до файла, если в участке пути есть module
              auto: (resPath: string) => Boolean(resPath.includes('.module.')), 
              // для генерации обычных названий с указанием пути 
              localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
          }
        },
        // Compiles Sass to CSS
        "sass-loader",
      ]
    };


    return [ // конфигурируем лоадеры, которые обрабатывают файлы, которые выходят за рамки js. 
    typeScriptLoader,
    cssLoader
  ]  
}

// если писать на нативном JS нужен babel