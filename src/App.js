import React from 'react'
import { ListOfCategories } from './components/listOfCategories/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/listOfPhotoCards/ListOfPhotoCards'
import { Logo } from './components/logo/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
export const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')
    console.log(detailId)
    return <>
        <GlobalStyle />
        <Logo />
        {detailId ?
            <PhotoCardWithQuery id={detailId} /> :
            <>
                <ListOfCategories />
                <ListOfPhotoCards categoryId={2} />
            </>}

    </>
}