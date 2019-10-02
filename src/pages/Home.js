import React from 'react'
import { ListOfCategories } from '../components/listOfCategories/ListOfCategories'
import { ListOfPhotoCards } from '../components/listOfPhotoCards/ListOfPhotoCards'
export const Home = ({ categoryId }) => {
    return <>
        <ListOfCategories />
        <ListOfPhotoCards categoryId={categoryId} />
    </>
}