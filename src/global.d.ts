// файл с глобальной декларацией типов
declare module '*scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}