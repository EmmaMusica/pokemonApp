import { pokeApi } from "../api"
import { Pokemon } from "../interfaces"


export const getPokemonInfo = async (nameOrId: string) => {

    const header = { headers: {'accept-encoding': '*'} }
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ nameOrId }`, {...header}) 
    
    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
}