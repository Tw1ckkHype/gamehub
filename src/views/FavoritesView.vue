<template>
  <v-container>
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="10">
        <h1 class="text-h3 mb-6">❤️ {{ $t('favorites.title') }}</h1>
<p v-if="favoriteGames.length === 0" class="text-h6">{{ $t('favorites.empty') }}</p>

<v-btn color="error" @click.stop="toggleFavorite(game.id)">
  {{ $t('games.removeFavorite') }}
</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="game in favoriteGames" :key="game.id" cols="12" sm="6" md="4">
        <v-card hover @click="goToDetail(game.id)">
          <v-img :src="game.image" height="200" cover></v-img>
          <v-card-title>{{ game.title }}</v-card-title>
          <v-card-subtitle>{{ game.genre }} • {{ game.year }}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="error" @click.stop="toggleFavorite(game.id)">
              {{ $t('games.removeFavorite') }}
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
  computed: {
    ...mapGetters(['favoriteGames'])
  },
  methods: {
    ...mapActions(['toggleFavorite']),
    goToDetail(id) {
      this.$router.push(`/games/${id}`)
    }
  }
}
</script>