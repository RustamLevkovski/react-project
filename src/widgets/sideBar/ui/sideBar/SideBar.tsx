import React, { useState } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import SidebarShow from 'shared/assets/icons/sidebar-show.svg'
import SidebarHide from 'shared/assets/icons/sidebar-hide.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface SideBarProps {
  className?: string
}

export const SideBar = ({ className }: SideBarProps) => {
  const [isCollapsed, setCollapsed] = useState(false)
  const onToogle = () => {
    setCollapsed(prevState => !prevState)
  }
  return (
      <div
          className={classNames(cls.SideBar, { [cls.collapsed]: isCollapsed }, [className])}>
          <Button
              theme={ThemeButton.CLEAR}
              onClick= { onToogle }>
              {isCollapsed
                ? <SidebarShow className={cls.sidebarIcon} />
                : <SidebarHide className={cls.sidebarIcon} />}
          </Button>
          <div className={cls.switchers} >
              <ThemeSwitcher/>
          </div>
      </div>
  )
}
