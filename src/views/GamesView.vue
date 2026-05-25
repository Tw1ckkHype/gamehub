<template>
  <v-container>
    <v-text-field v-model="search" label="Поиск игр" prepend-icon="mdi-magnify" class="mb-6"></v-text-field>

    <v-row>
      <v-col v-for="game in filteredGames" :key="game.id" cols="12" sm="6" md="4">
        <v-card hover @click="goToDetail(game.id)">
          <v-img :src="game.image" height="200" cover></v-img>
          <v-card-title>{{ game.title }}</v-card-title>
          <v-card-subtitle>{{ game.genre }} • {{ game.year }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      games: [
        { id: 1, title: "The Witcher 3", genre: "RPG", year: 2015, image: "https://picsum.photos/id/1015/800/400" },
        { id: 2, title: "Cyberpunk 2077", genre: "Action RPG", year: 2020, image: "https://picsum.photos/id/201/800/400" },
        { id: 3, title: "Elden Ring", genre: "Action", year: 2022, image: "https://picsum.photos/id/237/800/400" },
        { id: 4, title: "Baldur's Gate 3", genre: "RPG", year: 2023, image: "https://picsum.photos/id/180/800/400" }
      ]
    }
  },
  computed: {
    filteredGames() {
      return this.games.filter(g => g.title.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/games/${id}`)
    }
  }
}
</script>