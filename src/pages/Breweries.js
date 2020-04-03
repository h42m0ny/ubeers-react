import React from 'react';
import BrewerieItem from '../components/BrewerieItem';
import beersData from '../data/beers';
import {Grommet} from 'grommet';
import Layout from '../components/Layout';

const breweries = beersData.map((beer)=> {
    const brewerie = beer.brewerie;
    return brewerie;
});

const breweries = () => {
    return(
        <Layout children={<Grommet><BrewerieList breweries={breweries}/></Grommet> }/>
    )
}

export default Breweries;