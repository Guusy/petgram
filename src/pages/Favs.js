import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/layout/Layout'

export default () => (
    <Layout title="Tus favoritos" subtitle="Aqui puedes encontrar tus favoritos">
        <FavsWithQuery />
    </Layout>
)