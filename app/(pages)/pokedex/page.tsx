'use client'

import { api } from "@/app/api/pokemon/route";
import RegionFilter from "@/app/components/RegionFilter";
import { useEffect, useState } from "react";

export default function Pokedex(props: any) {
    const [pokemon, setPokemon] = useState([])
    const {selectedRegion} = props

    useEffect(() => {
        let url = 'pokemon?limit=100000&offset=0';

        if (selectedRegion === 'kanto') {
            url = 'pokemon?offset=0&limit=151'
          } if (selectedRegion === 'johto') {
            url = 'pokemon?offset=151&limit=100'
          } if (selectedRegion === 'hoenn') {
            url = 'pokemon?offset=251&limit=135'
          } if (selectedRegion === 'sinnoh') {
            url = 'pokemon?offset=386&limit=107'
          } if (selectedRegion === 'unova') {
            url = 'pokemon?offset=493&limit=156'
          } if (selectedRegion === 'kalos') {
            url = 'pokemon?offset=649&limit=72'
          } if (selectedRegion === 'alola') {
            url = 'pokemon?offset=721&limit=86'
          } if (selectedRegion === 'galar') {
            url = 'pokemon?offset=809&limit=89'
          } if (selectedRegion === 'no-region') {
            url = 'pokemon?offset=807&limit=2'
          }

        api.get(url).then(({data}) => {
            setPokemon(data.results)
        })

        console.log(pokemon)
    }, [selectedRegion])

    return (
        <RegionFilter/>
    )
}