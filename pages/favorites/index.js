import { Layouts } from "@/components/layouts";
import { FavoritesPokemos } from "@/components/pokemon";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { useEffect, useState } from "react";

const Favorites = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons())
  }, []);

  return (
    <Layouts title='Pokemons - Favoritos'>

      {
        favoritesPokemons.length === 0
          ? (<NoFavorites />)
          : (<FavoritesPokemos pokemons={favoritesPokemons} />)
      }

    </Layouts>
  )
};

export default Favorites;