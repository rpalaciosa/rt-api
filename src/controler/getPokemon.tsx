import {Pokemon} from '../models/pokemon.m';

export async function getPokemons(): Promise<Pokemon[]> {
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json"); 
    console.log("acá");
    const result = await response.json() ;
    const pokemons = result.results.map((pokemon:any) => ({ 
        name: pokemon.name,
        national_number: pokemon.national_number,
        imgNormal: pokemon.sprites["normal"],
        imgLarge: pokemon.sprites["large"], 
        imgAnimated: pokemon.sprites["animated"], 
        total: pokemon.total,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        sp_atk: pokemon.sp_atk,
        sp_def: pokemon.sp_def,
        speed: pokemon.speed,
        type: pokemon.type[0]
    })); 

    const pokemons_unicos = pokemons.filter(
        (pokemon: any , index: number) =>
        pokemons.findIndex((other: any) => other.national_number === pokemon.national_number ) === index
    );
    return pokemons_unicos ;

}