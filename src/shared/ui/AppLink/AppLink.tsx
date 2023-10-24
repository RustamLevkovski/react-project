import React, { type FC, type PropsWithChildren } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  children?: string | any
}

export const AppLink: FC<AppLinkProps> = (props: PropsWithChildren<AppLinkProps>) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
      <Link
          to={to}
          className={ classNames(cls.AppLink, { skip: true }, [className, cls[theme]]) }
          {...otherProps}
      >
          { children }
      </Link>
  )
}
