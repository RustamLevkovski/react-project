// файл с глобальной декларацией типов
declare module '*scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>
  export default content
}

declare module '.png';
declare module '.jpg';
declare module '.jpeg';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean
