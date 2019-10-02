import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/logo/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { Router } from '@reach/router'
import { Navbar } from './components/navBar/NavBar'

const UserLogged = ({ children }) => {
    return children({ isAuth: false })
}
export const App = () => {
    return <>
        <GlobalStyle />
        <Logo />
        <Router>
            <Home path='/' />
            <Home path='/pet/:categoryId' />
            <Detail path='/detail/:detailId' />
        </Router>
        <UserLogged>
            {({ isAuth }) =>
                isAuth ?
                    <Router>
                        <User path='/user' />
                        <Favs path='/favs' />
                    </Router> :
                    <Router>
                        <NotRegisteredUser path='/user' />
                        <NotRegisteredUser path='/favs' />
                    </Router>
            }
        </UserLogged>
        <Navbar />
    </>
}