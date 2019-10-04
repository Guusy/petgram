import React, { useContext } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/logo/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'

import { Router, Redirect } from '@reach/router'
import { Navbar } from './components/navBar/NavBar'
import { Context } from './Context'

export const App = () => {
    const { isAuth } = useContext(Context)
    return <>
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
    </>
}