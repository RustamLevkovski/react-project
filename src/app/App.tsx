import React, { Suspense } from 'react'

import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/sideBar'
import { useTranslation } from 'react-i18next'

const Component = () => {
  const { t, i18n } = useTranslation('main')

  const toogle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <div>
          <button onClick={toogle}> {t('Перевод')} </button>
      </div>
  )
}

const App = () => {
  const { theme } = useTheme()
  return (
      <div className={classNames('app', {}, [theme])}>
          <Suspense fallback="">
              <Navbar />
              <Component/>
              <div className="content-page">
                  <SideBar />
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  )
}

export default App

// все <Route> которые есть в компоненте необходимо оборачивать в <Routes>
// в Route передаем несколько пропсов. В частности path={'/about'} и компонент который будет отрисовываться
// <Link to={'/'}>Main</Link>
// Lazy loading = code splitting = async chanck
// можно асинхронно подгружать библиотеки:
// import("./math").then(math => {
// })
// import { lazy } from 'react'; NOTE: компонент должен экспортироваться по дефолту
// const AboutPageAsync = lazy(() => import('./AboutPage'))
// Синхронная загрузка компонентов (в бандл попадает все):
// <Route path="/about" element={ <AboutPage /> }/>
// <Route path="/about" element={ <AboutPageAsync /> }/>
// Асинхронные компоненты необходимо в Suspense
// Suspense fallback={<div> Loading... </div>} - пока грузятся асинк компоненты - показывается сообщение или лоадер
