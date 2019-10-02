import React, { useState, useEffect } from 'react'
import { Category } from '../category/Category'
import { List, Item } from './styles'

const useCategoriesData = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://petgram-api-guusy.now.sh/categories')
            .then(res => res.json())
            .then((response) => {
                setCategories(response)
                setLoading(false)
            })
    }, [])

    return { categories, loading }
}
export const ListOfCategories = (props) => {
    const { categories, loading } = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false)

    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {
                categories.map(category =>
                    <Item key={category.id} >
                        <Category {...category} path={`/pet/${category.id}`} />
                    </Item>)
            }
        </List>)

    if (loading) {
        return <Category key='loading' />
    }
    return (
        <>
            {renderList()}
            {showFixed && renderList(true)}
        </>
    )
}