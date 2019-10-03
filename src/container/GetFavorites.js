import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Spinner } from '../components/spinner/Spinner'
import { ListOfFavs } from '../components/listOfFavs/ListOfFavs'

const GET_FAVS = gql`
    query getFavs {
        favs {
            id
            categoryId
            src
            likes
            userId
        }
    }
`

const renderProp = ({ loading, error, data = {} }) => {
    if (loading) return <Spinner />
    if (error) return <p>Error</p>
    const { favs } = data
    return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () =>
    (<Query query={GET_FAVS} fetchPolicy='cache-and-network'>
        {renderProp}
    </Query>)