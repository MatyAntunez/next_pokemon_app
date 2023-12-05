import { Layouts } from "@/components/layouts"
import { useRouter } from "next/router"
import { pokeApi } from "@/api";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import toggleFavorites from "@/utils/localFavorites";
import { useState } from "react";
import { localFavorites } from '@/utils'
import confetti from 'canvas-confetti';


const PokemonPage = ({ pokemon }) => {

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));

  const router = useRouter();
  //console.log(router.query);
  //console.log(pokemon);

  const onToggleFavorite = () => {
    localFavorites.toggleFavorites(pokemon.id)
    setIsInFavorites(!isInFavorites)


    if (!isInFavorites) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: { x: 1, y: 0 }
      });
    }
  };

  return (
    <Layouts title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100px'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button color='gradient' ghost={!isInFavorites} onClick={onToggleFavorite}>
                {isInFavorites ? 'En Favoritos' : 'Guardar en Favoritos'}
              </Button>

            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites: </Text>

              <Container direction='row' display='flex'>
                <Image src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>

            </Card.Body>
          </Card>

        </Grid>

      </Grid.Container>
    </Layouts>
  )
};

export default PokemonPage;

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`)

  return {
    paths: pokemon151.map((id) => ({
      params: { id }
    })),
    fallback: false
  }
};

export const getStaticProps = async ({ params }) => {
  //console.log(ctx.params);
  const { id } = params;

  const { data } = await pokeApi.get(`/pokemon/${id}`)
  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  };
  return {
    props: {
      pokemon
    }
  }
};













