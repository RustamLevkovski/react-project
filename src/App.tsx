import React, { Suspense, useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

import './styles/index.scss';
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";


const App = () => {
    const {theme, toogleTheme} = useTheme(); 
    return (
        <div className={ classNames('app', {}, [theme]) }>
            <button onClick={toogleTheme}> Change Theme </button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div> Loading... </div>}>
            <Routes>

                <Route path="/about" element={ <AboutPageAsync /> }/>
                <Route path="/" element={ <MainPageAsync /> } />
            </Routes>
            </Suspense>
        </div>
    )
}

export default App

// все <Route> которые есть в компоненте необходимо оборачивать в <Routes> 
// в Route передаем несколько пропсов. В частности path={'/about'} и компонент который будет отрисовываться
//<Link to={'/'}>Main</Link>
//Lazy loading = code splitting = async chanck
// можно асинхронно подгружать библиотеки:
// import("./math").then(math => {
// })
// import { lazy } from 'react'; NOTE: компонент должен экспортироваться по дефолту
//const AboutPageAsync = lazy(() => import('./AboutPage'))
// Синхронная загрузка компонентов (в бандл попадает все): 
//<Route path="/about" element={ <AboutPage /> }/>
//<Route path="/about" element={ <AboutPageAsync /> }/>
//Асинхронные компоненты необходимо в Suspense 
// Suspense fallback={<div> Loading... </div>} - пока грузятся асинк компоненты - показывается сообщение или лоадер
