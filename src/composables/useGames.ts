import { ref } from 'vue'
import { Game } from '@/interfaces/interfaces'




export const useGames = () => {

    const games = ref<Game[]>([
        { id: 1, isFavorite: false, name: 'Pokémon Yellow'},
        { id: 2, isFavorite: false, name: 'Mega Man X'},
        { id: 3, isFavorite: true, name: 'The Legend of Zelda'},
        { id: 4, isFavorite: true, name: 'Pac-Man'},
        { id: 5, isFavorite: false, name: 'Super Mario World'},
        { id: 6, isFavorite: false, name: 'Super Smash Bros'},
        { id: 7, isFavorite: true, name: 'Starcraft'},
        { id: 8, isFavorite: false, name: 'Metal Gear'},
        { id: 9, isFavorite: false, name: 'Paper Mario'},
        { id: 10, isFavorite: false,  name: 'Mario Maker'},
    ])

    const favoritesGames = ref<any>({})

    return {
        games,

        toggleFavorite: ( game: Game ) => {
            if( game.id in favoritesGames.value ) {
                delete favoritesGames.value[game.id]
                game.isFavorite = false
            } else {
                game.isFavorite = true
                favoritesGames.value[game.id] = game
            }

            localStorage.setItem('favorites',  JSON.stringify( favoritesGames.value ) )
        }
    }

}

