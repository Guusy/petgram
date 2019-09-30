import React from 'react'
import { ListOfCategories } from './components/listOfCategories/ListOfCategories'
import { GlobalStyle } from './GlobalStyles'
import { ListOfPhotoCards } from './components/listOfPhotoCards/ListOfPhotoCards'
export const App = () => <>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
</>