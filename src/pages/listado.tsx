import react ,{ useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';

import ListGroup from 'react-bootstrap/ListGroup';
import { getPokemons } from '../controler/getPokemon';
import { Pokemon } from '../models/pokemon.m';

const Listado=() => {

    const [pokemons , setPokemons ] = useState<Pokemon[]>([]);
    const [query , setQuery] = useState(""); 

    useEffect (()=> { 
        const obtenerTodos =async () => {
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        obtenerTodos();
    });

    const filtrarPokemon = pokemons.slice(0,151).filter((pokemon) => {
        return pokemon.name.toLowerCase().match(query.toLowerCase())
    })
    return (
        <>
        <h1> Listado </h1>
        < input type="text" 
                value={query} 
                placeholder="Buscar" 
                onChange={(event) => setQuery(event.target.value.trim() )}
        />

        <div className='content-raper'>
            <div className='content'>
                <div className='row gap-3'>

                    {filtrarPokemon?.slice(0,200).map((pokemon) => (
                        <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Figure>
                                <Figure.Image
                                    width={100}
                                    height={80}
                                    alt="100x80"
                                    src={pokemon.imgAnimated}
                                />
                                </Figure>
                            <Card.Body>
                                <Card.Title><strong>#</strong> {pokemon.national_number} {pokemon.name}</Card.Title>
                                <Card.Header>  {pokemon.type}  </Card.Header>
                                <Card.Text>
                                
                                </Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item> <strong>hp</strong> : {pokemon.hp} </ListGroup.Item>
                                    <ListGroup.Item> <strong>attack </strong>: {pokemon.attack} </ListGroup.Item>
                                    <ListGroup.Item> <strong>defense </strong>: {pokemon.defense}  </ListGroup.Item>
                                </ListGroup>

                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    )) }
                </div>    
            </div>    
        </div>
        </>
    );
}

export default Listado;