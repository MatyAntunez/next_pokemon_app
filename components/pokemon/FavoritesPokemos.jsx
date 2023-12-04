import { Card, Grid } from "@nextui-org/react"
import { FavoriteCardPokemon } from ".";


export const FavoritesPokemos = ({pokemons}) => {
    return (
        <Grid.Container gap={2} direction="row" justify='flex-start'>
            {
                pokemons.map(id => (
                   <FavoriteCardPokemon key={id} pokemonId={id}/>
                ))
            }
        </Grid.Container>
    )
};
