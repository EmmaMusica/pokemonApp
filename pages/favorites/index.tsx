import { NextPage } from 'next'
import { Layout } from '../../components/layouts'
import { useState, useEffect } from 'react';
import { localFavorites } from '../../utils';
import { Card, Grid } from '@nextui-org/react';
import { FavoritePokemons, NoFavorites } from '../../components/pokemon';

const FavoritesPages: NextPage = () => {


  const [favoritePokemons, setFavoritePokemon] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemon(localFavorites.pokemons())
  }, [])
  
  return (
    <Layout title='Pokemons Favoritos'>
        {
          favoritePokemons.length === 0
          ? ( <NoFavorites /> )
          : ( <FavoritePokemons pokemons={favoritePokemons}/> )
        }
    </Layout>
  )
}

export default FavoritesPages