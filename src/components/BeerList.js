import React from 'react'; 
import BeerItem from './BeerItem';
import {Grid} from 'grommet';

function BeerList({beers}) {
    return(
        <Grid
        columns={{
            count: 6,
            size: "auto"
        }}
        gap="small"
        >
         {beers.map((beer) => (<BeerItem key={beer.slug} beer={beer}/>))}
        </Grid>
    )
}

export default BeerList;