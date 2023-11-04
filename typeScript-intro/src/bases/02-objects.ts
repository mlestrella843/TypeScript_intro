export const pokemonsId = [ 1, 20, 30, 40, 50];

// pokemonsId.push( 'hola maria luisa' );
//pokemonsId.push( +'hola maria luisa' );
// pokemonsId.push( + '4' );
// console.log(pokemonsId);

interface PokemonProps {
    id: number;
    name: string;
    age: number
}

export const balbaseur: PokemonProps = {
    id: 2,
    name: 'Balbaseur',
    age:1
}

export const charmandeur: PokemonProps = {
    id: 1,
    name: 'Charmandeur',
    age:2
}

export const pokemons: PokemonProps [] = [];
pokemons.push(balbaseur, charmandeur)
console.log( pokemons);

