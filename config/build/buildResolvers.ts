import { type ResolveOptions } from 'webpack'
import { type BuildOptions } from './types/config'

export function buildResolvers (options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // расширения тех файлов, для которых при импорте мы не будем указывать расширения
    preferAbsolute: true, // определяет абсолютные пути в приоритете или нет
    modules: [options.paths.src, 'node_modules'],
    alias: {},
    mainFiles: ['index']
  }
}
