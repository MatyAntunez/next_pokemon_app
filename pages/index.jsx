import { pokeApi } from "@/api";
import { Layouts } from "@/components/layouts";
import { PokemonCard } from "@/components/pokemon";
import { Button, Card, Grid, Row, Text } from "@nextui-org/react";


export default function Home({ pokemons }) {


  return (
    <Layouts title={'Listado de Pokemons'}>

      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((pokemonOnly) => (
            <PokemonCard key={pokemonOnly.id} pokemon={pokemonOnly}/>



          ))
        }
      </Grid.Container>
    </Layouts>
  )
};


export const getStaticProps = async (ctx) => {

  const { data } = await pokeApi.get('/pokemon?limit=151')

  const pokemons = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg
  return {
    props: {
      pokemons
    }
  }
}


