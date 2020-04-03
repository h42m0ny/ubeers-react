import React from 'react';
import BeerList from '../components/BeerList';
import beersData from '../data/beers'
import {Grommet} from 'grommet'
import Layout from '../components/Layout'

const Beers = () => {
    return(
        <Layout children={<Grommet><BeerList beers={beersData}/></Grommet> }/>
    )
}

export default Beers;