import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'] // расширения тех файлов, для которых при импорте мы не будем указывать расширения
  };
}
