import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";


export function Pokemon() {

    const [list, setLIst] = useState([]);

    useEffect(() => {

        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
            .then(function (response) {
                console.log(list);
                setLIst(response.data.results);
            })
            .catch(function (erro) {
                console.log(`Ops!!, algo aconteceu ${erro}`)
            })

    }, []);


    return (
        <div className="container">
            <ul>
                {list.map((item) => {
                    return (
                        <div>
                            <article className="pokemons">
                                <img src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png`} alt="" />
                                <li>{item.name}</li> 
                                <button><a href={`https://www.pokemon.com/br/pokedex/${item.name}`} target="_blank">Detalhes</a></button>                                                                  
                            </article>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}