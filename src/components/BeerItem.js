import React from 'react';
import {Box} from 'grommet';
import styled from 'styled-components';

const BoxStyle = styled(Box)`
text-align:center;
`

function BeerItem({beer}) {
    return(
        <BoxStyle>
            <img src={"/images/"+beer.image} width={"220px"} alt={beer.name + " image"} />
            <p> {beer.name}</p>
            <p> {beer.categorie}</p>
            <p> {beer.brasserie.name}</p>
        </BoxStyle>
    )
}

export default BeerItem;