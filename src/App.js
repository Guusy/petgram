import React from 'react'
import { ListOfCategories } from './components/listOfCategories/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/listOfPhotoCards/ListOfPhotoCards'
import { Logo } from './components/logo/Logo'
export const App = () => <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={2} />
</>