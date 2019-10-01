import React from 'react'
import { PhotoCard } from '../photoCard/PhotoCard'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhotos = graphql(gql`
    query getPhotos {
        photos {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`)

const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
    return (
        photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
    )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)