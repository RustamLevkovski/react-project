import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'

export function buildLoaders ({ isDev }: BuildOptions): RuleSetRule[] {
  // для каждого лоадера создаем свой объект, потому что порядок лоадеров имеет значение.
  // можем также добавить расширения шрифтов
  const fileLoader =
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    }

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true
            }
          ]
        ]
      }
    }
  }

  const svgLoader =
    {
      test: /\.svg$/,
      use: ['@svgr/webpack']
    }

  const typeScriptLoader =
    {
      test: /\.tsx?$/, // указываем регулярное выражение, по которому будет происходить поиск файлов, которые надо будет пропустить через loader (ts & tsx)
      use: 'ts-loader',
      exclude: /node_modules/ // исключаем node-modules
    }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            // путь до файла, если в участке пути есть module
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // для генерации обычных названий с указанием пути
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
          }
        }
      },
      // Compiles Sass to CSS
      'sass-loader'
    ]
  }

  return [ // конфигурируем лоадеры, которые обрабатывают файлы, которые выходят за рамки js.
    fileLoader,
    svgLoader,
    babelLoader,
    typeScriptLoader,
    cssLoader
  ]
}

// если писать на нативном JS нужен babel
