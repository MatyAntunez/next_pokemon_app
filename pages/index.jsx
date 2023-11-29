import { pokeApi } from "@/api";
import { Layouts } from "@/components/layouts";
import { Card, Grid, Row, Text } from "@nextui-org/react";


export default function Home({ pokemons }) {


  return (
    <Layouts title={'Listado de Pokemons'}>

      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map(({ id, name, img }) => (
            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
              <Card hoverable clickable>
                <Card.Body css={{ p: 1 }}>
                  <Card.Image src={img}
                    width='100px'
                    height={140}
                  />

                </Card.Body>

                <Card.Footer>

                  <Row justify='space-between'>
                    <Text transform='capitalize'>{name}</Text>
                    <Text>#{id}</Text>
                  </Row>
                </Card.Footer>

              </Card>
            </Grid>
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