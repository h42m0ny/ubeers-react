import React from 'react'; 
import BrewerieItem from './BrewerieItem';
import {Grid} from 'grommet';
function BrewerieList({breweries}) {
    return(
        <Grid
        columns={{
            count: 6,
            size: "auto"
        }}
        gap="small"
        >
         {breweries.map((brewerie, key) => (<BrewerieItem key={key} brewerie={brewerie}/>))}
        </Grid>
    )
}

export default BrewerieList;