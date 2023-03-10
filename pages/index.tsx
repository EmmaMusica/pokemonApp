import { Grid} from '@nextui-org/react';
import { GetStaticProps } from 'next'
import { NextPage } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage <Props> = ({pokemons}) => {


  return (
    <Layout title={'Listado de Pokémons'}>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map( (pokemon) => (
             <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}




// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

// getStaticProps es una funcion que funciona solo del lado del servidor.
// Se utiliza para preparar previamente la página antes de ser renderizada
 


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const header = { headers: {'accept-encoding': '*'} }
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151', {...header})

  let pokemons: SmallPokemon[] = data.results.map( (e, i) => ({
    ...e,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
