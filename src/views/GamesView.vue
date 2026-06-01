<template>
  <v-container>
    <v-text-field 
  v-model="search" 
  :label="$t('games.search')" 
  prepend-icon="mdi-magnify" 
  class="mb-6"
></v-text-field>

<v-btn color="primary" @click.stop="goToDetail(game.id)">
  {{ $t('games.detail') }}
</v-btn>

    <v-row>
      <v-col v-for="game in filteredGames" :key="game.id" cols="12" sm="6" md="4">
        <v-card hover @click="goToDetail(game.id)">
          <v-img :src="game.image" height="200" cover></v-img>
          <v-card-title>{{ game.title }}</v-card-title>
          <v-card-subtitle>{{ game.genre }} • {{ game.year }}</v-card-subtitle>
          
          <v-card-actions>
            <v-btn color="primary" @click.stop="goToDetail(game.id)">{{ $t('games.detail') }}</v-btn>
            <v-btn 
              icon 
              :color="isFavorite(game.id) ? 'error' : 'grey'"
              @click.stop="toggleFavorite(game.id)"
            >
              ❤️
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return { search: '' }
  },
  computed: {
    ...mapGetters(['favoriteGames']),
    filteredGames() {
      return this.$store.state.games.filter(game =>
        game.title.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  },
  methods: {
    ...mapActions(['toggleFavorite']),
    goToDetail(id) {
      this.$router.push(`/games/${id}`)
    },
    isFavorite(id) {
      return this.favoriteGames.some(game => game.id === id)
    }
  }
}
</script>