import { Layouts } from "@/components/layouts"
import { useRouter } from "next/router"
import { pokeApi } from "@/api";


const PokemonPage = ({ pokemon }) => {

  const router = useRouter();
  //console.log(router.query);
  console.log(pokemon);


  return (
    <Layouts title='algun pokemon'>
      <h1>{pokemon.name}</h1>
    </Layouts>
  )
};

export default PokemonPage;



// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
  //const { data } = await  // your fetch function here 

  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`)
  //console.log(pokemon151);

  return {
    paths: pokemon151.map((id) => ({
      params: { id }
    })),
    fallback: false
  }
}





export const getStaticProps = async ({ params }) => {

  const { id } = params;
  //console.log(ctx.params);

  const { data } = await pokeApi.get(`/pokemon/${id}`)



  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg
  return {
    props: {
      pokemon: data
    }
  }
};













