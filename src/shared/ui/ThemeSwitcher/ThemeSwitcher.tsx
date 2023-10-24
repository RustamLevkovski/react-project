import React from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkTheme from 'shared/assets/icons/darkTheme.svg'
import LightTheme from 'shared/assets/icons/lightTheme.svg'
import { Button, ThemeButton } from '../Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toogleTheme } = useTheme()
  return (
      <Button
          theme={ThemeButton.CLEAR}
          className={classNames(cls.ThemeSwitcher, {}, [className])}
          onClick={toogleTheme}
      >
          { theme === Theme.LIGHT
            ? <LightTheme className={classNames(cls.themeIcon)} />
            : <DarkTheme className={classNames(cls.themeIcon)} /> }
      </Button>
  )
}
