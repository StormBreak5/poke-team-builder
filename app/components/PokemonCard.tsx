import React from "react";

interface Props {
  name: string;
  imageUrl: string;
  types: string[];
  id: number;
}

interface TypeBgColors {
  [key: string]: string;
}

const PokemonCard: React.FC<Props> = ({ name, imageUrl, types, id }) => {
  const paddedId = `00${id}`.slice(-3);
  const typeBgColors: TypeBgColors = {
    normal: "bg-gray-400",
    fighting: "bg-red-400",
    flying: "bg-blue-400",
    poison: "bg-purple-400",
    ground: "bg-yellow-400",
    rock: "bg-yellow-600",
    bug: "bg-green-500",
    ghost: "bg-indigo-400",
    steel: "bg-gray-600",
    fire: "bg-red-600",
    water: "bg-blue-600",
    grass: "bg-green-400",
    electric: "bg-yellow-500",
    psychic: "bg-pink-400",
    ice: "bg-blue-200",
    dragon: "bg-purple-600",
    dark: "bg-gray-800",
    fairy: "bg-pink-200",
  };

  return (
    <div className="border p-4 shadow-lg rounded-md flex flex-col items-center">
      <div className="text-xl font-bold mb-2">{`#${paddedId} ${name}`}</div>
      <img src={imageUrl} alt={name} className="w-32 h-32 mb-2" />
      <div className="flex mb-2">
        {types.map((type) => (
          <div
            key={type}
            className={`px-2 py-1 text-white rounded-full mr-2 ${
              typeBgColors[type.toLowerCase()]
            }`}
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
