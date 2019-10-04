import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/logo/Logo'

import { Router, Redirect } from '@reach/router'
import { Navbar } from './components/navBar/NavBar'
import { Context } from './Context'

const Favs = React.lazy(() => import('./pages/Favs'))
const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const User = React.lazy(() => import('./pages/User'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))

export const App = () => {
    const { isAuth } = useContext(Context)
    return <Suspense fallback={<div />}>
        <GlobalStyle />
        <Logo />
        <Router>
            <NotFound default />
            <Home path='/' />
            <Home path='/pet/:categoryId' />
            <Detail path='/detail/:detailId' />
            {!isAuth && <NotRegisteredUser path='/login' />}
            {!isAuth && <Redirect from='/favs' to='/login' />}
            {!isAuth && <Redirect from='/user' to='/login' />}
            {isAuth && <Redirect from='/login' to='/' />}
            <User path='/user' />
            <Favs path='/favs' />
        </Router>
        <Navbar />
    </Suspense>
}