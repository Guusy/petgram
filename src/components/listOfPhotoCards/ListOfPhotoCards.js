import React from 'react'
import { PhotoCard } from '../photoCard/PhotoCard'
import { withPhotos } from '../../hoc/withPhotos'


const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
    return (
        photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
    )
}
const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
export { ListOfPhotoCards, ListOfPhotoCardsComponent }