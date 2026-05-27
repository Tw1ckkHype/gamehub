import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      games: [
        {
          id: 1,
          title: "The Witcher 3",
          genre: "RPG",
          year: 2015,
          image: "https://picsum.photos/id/1015/800/400",
          price: 1499,
          description: "Эпическая RPG про Геральта из Ривии."
        },
        {
          id: 2,
          title: "Cyberpunk 2077",
          genre: "Action RPG",
          year: 2020,
          image: "https://picsum.photos/id/201/800/400",
          price: 1999,
          description: "Киберпанковский мир Night City."
        },
        {
          id: 3,
          title: "Elden Ring",
          genre: "Action",
          year: 2022,
          image: "https://picsum.photos/id/237/800/400",
          price: 2499,
          description: "Огромный открытый мир и сложные боссы."
        },
        {
          id: 4,
          title: "Baldur's Gate 3",
          genre: "RPG",
          year: 2023,
          image: "https://picsum.photos/id/180/800/400",
          price: 2999,
          description: "Шедевр современной ролевой игры."
        }
      ],
      favorites: [] // массив id избранных игр
    }
  },

  mutations: {
    toggleFavorite(state, gameId) {
      if (state.favorites.includes(gameId)) {
        state.favorites = state.favorites.filter(id => id !== gameId)
      } else {
        state.favorites.push(gameId)
      }
    }
  },

  actions: {
    toggleFavorite({ commit }, gameId) {
      commit('toggleFavorite', gameId)
    }
  },

  getters: {
    favoriteGames(state) {
      return state.games.filter(game => state.favorites.includes(game.id))
    }
  }
})