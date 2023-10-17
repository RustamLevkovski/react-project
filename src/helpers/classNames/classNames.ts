type Mods = Record<string, boolean | string>;
//Record - специальные TS класс/тип, который обозначает, что в данном случае в качестве ключа - string, а в качестве значения либо стринг либо бул. 
// const obj: Mods = {
//     'hovered': 'str', 
//     'hov': false
// }

export function classNames(className: string, mods: Mods, additional: string[]): string {
    return [
        className,
        ...additional,
        ...Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className, value]) =>  className)
    ].join(' ');
}

