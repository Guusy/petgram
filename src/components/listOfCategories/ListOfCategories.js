import React from 'react'
import { Category } from '../category/Category'
import { List, Item } from './styles'
export const ListOfCategories = (props) => {
    return (
        <List>
            {
                [1, 2, 3, 4].map(category => <Item key={category} > <Category /></Item>)
            }
        </List>
    )
}