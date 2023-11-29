import { Layouts } from "@/components/layouts";
import { Button } from "@nextui-org/react";


export default function Home(props) {

  console.log(props);


  return (
    <Layouts title={'Listado de Pokemons'}>

      <ul>
        <li></li>
      </ul>

    </Layouts>
  )
};


export const getStaticProps = async (ctx) => {
  
  

  return {
    props: {
      
    }
  }
}