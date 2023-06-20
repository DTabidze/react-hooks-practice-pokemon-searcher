import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useState, useEffect } from "react";

const API = "http://localhost:3000/pokemon"

function PokemonPage() {

  const [pokemonDB,setPokemonDB] = useState([])
  const [search,setSearch] = useState('')
  const [number,setNumber] = useState(0)

  const [hp,setHp] = useState('')
  const [name,setName] = useState('')
  const [front,setFront] = useState('')
  const [back,setBack] = useState('')


  useEffect( () => {
    fetch (API)
    .then (response => response.json())
    .then (data => {
      console.log(data)
      setPokemonDB(data)
      
    })
  }, [number])
  
  console.log("pokemonDB", pokemonDB)

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleName (e) {
    setName(e.target.value)
  }

  function handleHp(e) {
    setHp(e.target.value)
  }

  function handleFront (e) {
    setFront(e.target.value)
  }

  function handleBack (e) {
    setBack(e.target.value)
  }

  function handleForm(e) {
    e.preventDefault()
    fetch (API, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        hp: hp,
        sprites: {
          front: front,
          back: back
        }
      })
    })
    .then (response => response.json())
    .then (data => setNumber(number + 1))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleForm={handleForm} handleName={handleName} handleHp={handleHp} handleFront={handleFront} handleBack={handleBack} hp={hp} name={name} front={front} back={back}/>
      <br />
      <Search handleSearch={handleSearch} search={search}/>
      <br />
      <PokemonCollection pokemonDB={pokemonDB.filter (pokemon => pokemon.name.includes(search) === true)} />
    </Container>
  );
}

export default PokemonPage;
