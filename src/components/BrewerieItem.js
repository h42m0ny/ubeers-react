import React from 'react';
import {Box} from 'grommet';
import styled from 'styled-components';

const BoxStyle = styled(Box)`
text-align:center;
`

function BrewerieItem({brewerie}) {
    return(
        <BoxStyle>
            <p> {brewerie.name}</p>
            <p> {brewerie.description}</p>
            <p> {brewerie.address}</p>
        </BoxStyle>
    )
}

export default BrewerieItem;