import { GlobalStyles } from "./styles/global-styles";

import Pokedex from "./assets/pokedex.png"
import { Button } from "./components/Button";
import { useState } from "react";
import { VContainer } from "./container/Vertical";
import { HContainer } from "./container/Horizontal";
import { Input } from "./components/Input";
import { useEffect } from "react";

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/"

  const [id, setId] = useState<any>(1)
  const [inputValue, setInputValue] = useState<any>("")
  const [pokemon, setPokemon] = useState<string>("")
  const [name, setName] = useState<string>("")

  function changeInputValue(event: any) {
    setInputValue(event.target.value)
  }

  function handleCleanField() {
    setInputValue("")
  }

  function handlePrev() {
    if (isNaN(id)) {
      setId(1)
    }
    if (id > 1) {
      setId(id - 1)
    }
  }

  function handleNext() {
    if (isNaN(id)) {
      setId(1)
    }
    if (id < 649) {
      setId(id + 1)
    }
  }

  function handleEnter(event: any) {
    if (event.key == "Enter") {
      searchPokemon(event)
    }
  }

  function handleLostFocus(event: any) {
    searchPokemon(event)
  }

  function searchPokemon(event: any) {
    let inputValue = event.target.value

    if (inputValue) {
      setInputValue("")

      if (isNaN(inputValue)) {
        inputValue = inputValue.toLowerCase()
      } else {
        inputValue = parseInt(inputValue)
      }

      setId(inputValue)
    }
  }

  useEffect(() => {
    let idPokemon = id
    if (idPokemon < 1) {
      idPokemon = 1
    } else if (idPokemon > 649) {
      idPokemon = 649
    }

    setName("Loading...")
    setPokemon("http://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif")
    fetch(url + idPokemon).then(async response => {
      let data = await response.json()

      setId(data.id)
      setName(data.name)
      setPokemon(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`)
    }).catch(() => {
      setName("Not found")
      setPokemon("")
    })
  }, [id])

  return (
    <>
      <VContainer>
        <img src={Pokedex} />
        <HContainer isAbsolute top="200px" left="42.5px">
          <img className="pokemon_img" src={pokemon} />
        </HContainer>
        <HContainer isAbsolute bottom="253px" right="110px">
          <h1 className="pokemon_data"><span className="pokemon_slot">{id}</span> - <span className="pokemon_name">{name}</span></h1>
        </HContainer>
        <HContainer isAbsolute bottom="150px" left="calc(50% - 15px)" transform="translateX(-50%)">
          <Input value={inputValue} placeholder="ID ou Nome do Pokémon" type="text" onChange={changeInputValue} onClick={handleCleanField} onKeyPress={handleEnter} onBlur={handleLostFocus} />
        </HContainer>
        <HContainer isAbsolute bottom="50px" left="calc(50% - 15px)" transform="translateX(-50%)">
          <Button text="Anterior" onClick={handlePrev} />
          <Button text="Próximo" onClick={handleNext} />
        </HContainer>
      </VContainer>
      <GlobalStyles />
    </>
  );
}

export default App;
