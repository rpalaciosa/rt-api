import {Pokemon} from '../models/pokemon.m';

export async function getPokemons(): Promise<Pokemon[]> {
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json"); 

    const result = await response.json() ;
    const pokemons = result.results.map((pokemon:any) => ({ 
        name: pokemon.name,
        national_number: pokemon.national_number,
        imgNormal: corrije_url(pokemon.sprites["normal"]),
        imgLarge: corrije_url(pokemon.sprites["large"]), 
        imgAnimated: corrije_url(pokemon.sprites["animated"]), 
        total: pokemon.total,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        sp_atk: pokemon.sp_atk,
        sp_def: pokemon.sp_def,
        speed: pokemon.speed,
        type1: pokemon.type[0],
        type2: pokemon.type[1],
        badge1: cargar_badge(pokemon.type[0] ),
        badge2: cargar_badge(pokemon.type[1] )
    })); 

    function corrije_url(p_url : string ){
       
        return p_url.replace(/'/g,"");
    }

    function cargar_badge(t1 : string){
        if (t1 === undefined ) return '';

        switch ( t1.toLowerCase() ) {
            case 'grass' :  return 'success';
            case 'fire' :  return 'danger';
            case 'water' :  return 'primary';
            case 'bug' :  return 'success';
            case 'normal' :  return 'secondary';
            case 'dark' :  return 'dark';
            case 'poison' :  return 'danger';
            case 'electric' :  return 'warning';
            case 'ice' :  return 'primary';
            case 'ground' :  return 'warning';
            case 'fairy' :  return 'info';
            case 'fighting' :  return 'danger';
            case 'psychic' :  return 'warning';
            case 'rock' :  return 'secondary';
            case 'ghost' :  return 'secondary';
            case 'steel' :  return 'dark';
            case 'flying' :  return 'info';
            default : return 'light';
         }
    }    

   
    
    const pokemons_unicos = pokemons.filter(
        (pokemon: any , index: number) =>
        pokemons.findIndex((other: any) => other.national_number === pokemon.national_number ) === index
    );
    return pokemons_unicos ;

}