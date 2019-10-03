import React from 'react'
import { Image, Grid, Link } from './styles'
export const ListOfFavs = ({ favs = [] }) => (
    <Grid>
        {favs.map(({ id, src }) =>
            <Link key={id} to={`/detail/${id}`}>
                <Image src={src} />
            </Link>)
        }
    </Grid>
)
