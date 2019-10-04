import React from 'react'
import { ListOfCategories } from '../components/listOfCategories/ListOfCategories'
import { ListOfPhotoCards } from '../components/listOfPhotoCards/ListOfPhotoCards'
import { Layout } from '../components/layout/Layout'

export const Home = ({ categoryId }) => {
    return <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'>
        <ListOfCategories />
        <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
}