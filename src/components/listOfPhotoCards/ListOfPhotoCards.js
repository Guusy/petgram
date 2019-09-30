import React from 'react'
import { PhotoCard } from '../photoCard/PhotoCard'

export const ListOfPhotoCards = () => {
    return (
        [1, 2, 3, 4, 5, 6, 7, 8].map(photocard => <PhotoCard {...photocard} />)
    )
}