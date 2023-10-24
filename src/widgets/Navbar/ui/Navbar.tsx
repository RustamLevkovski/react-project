import React from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('main')

  return (
      <div className={ classNames(cls.Navbar) }>
          <div className={cls.links}>
              <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}> {t('Главная')} </AppLink>
              <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}> {t('О нас')} </AppLink>
          </div>
      </div>
  )
}
