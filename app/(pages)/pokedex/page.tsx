"use client";
import { useState, useEffect } from "react";
import { api } from "@/app/api/pokemon/route";
import Image from "next/image";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  let url = "pokemon?limit=1008";

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        console.log(response.data.results);
        setPokemons(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-4xl font-bold mb-4 text-center">All Pokemon</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {pokemons.map((pokemon: any) => {
          const pokemonIndex =
            pokemon.url.split("/")[pokemon.url.split("/").length - 2];
          const pokemonName =
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
          return (
            <div
              key={pokemon.name}
              className=" rounded-md shadow-lg p-4 flex flex-col justify-center items-center"
            >
              <div className="h-28 w-28 relative">
                <Image
                  src={`https://pokepast.es/img/pokemon/${pokemonIndex}-0.png`}
                  alt={pokemon.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-xl font-semibold mt-2">{pokemonIndex}. {pokemonName}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
