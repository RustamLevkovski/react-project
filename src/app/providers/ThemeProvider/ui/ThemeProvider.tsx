import React, { type FC, type ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'
// внутри самого модуля рекомендуется использовать относительные пути, чтобы мы могли этот модуль переместить и не было проблем с путям

export interface Props {
  children?: ReactNode[] | ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
      <ThemeContext.Provider value={defaultProps}>
          {children}
      </ThemeContext.Provider>
  )
}

export default ThemeProvider
