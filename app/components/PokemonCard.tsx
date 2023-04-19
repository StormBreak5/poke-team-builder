'use client'

import { useEffect, useState } from "react";
import { api } from "../api/pokemon/route";

const PokeCard = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        let url = 'pokemon?limit=100000&offset=0';

        api.get(url).then(({data}) => {
            setPokemon(data.results)
        })

        console.log(pokemon)
    }, [])
    

    return (
        <div> <button >console log</button></div>
    )
}

export default PokeCard;