import React from 'react'
import { PhotoCard } from '../photoCard/PhotoCard'

export const ListOfPhotoCards = () => {
    return (
        [1, 2, 3].map(photocard => <PhotoCard {...photocard} />)
    )
}