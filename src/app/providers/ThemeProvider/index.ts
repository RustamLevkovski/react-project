import { Theme } from './lib/ThemeContext'
import { useTheme } from './lib/useTheme'
import ThemeProvider from './ui/ThemeProvider'

export {
  ThemeProvider,
  useTheme,
  Theme
}

// является public API и он регулирует то, что мы отдаем наружу. т.о. импорты данных сущностей могут идти из этого файла:
// import { ThemeProvider } from "app/providers/ThemeProvider";
// или
// import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
