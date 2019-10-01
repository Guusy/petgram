import React from 'react'
import { PhotoCard } from "../components/photoCard/PhotoCard";
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Spinner from '../components/spinner/Spinner';

const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id:ID!) {
        photo(id:$id) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`

const renderProp = ({ loading, error, data = {} }) => {
    console.log(data)
    if (loading) return <div style={{
        minHeigth: '280px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}><Spinner style={{ minHeigth: '280px' }} /></div>
    if (error) return <p>Error.</p>
    const { photo = {} } = data
    return <PhotoCard {...photo} />
}
export const PhotoCardWithQuery = ({ id }) => (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
        {renderProp}
    </Query>)