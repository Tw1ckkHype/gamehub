<template>
  <v-container>
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="10">
        <h1 class="text-h3 mb-6">❤️ {{ $t('favorites.title') }}</h1>
        <p v-if="favoriteGames.length === 0" class="text-h6">{{ $t('favorites.empty') }}</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="game in favoriteGames" :key="game.id" cols="12" sm="6" md="4">
        <BaseCard :image="game.image">
          <template #title>{{ game.title }}</template>
          <template #subtitle>{{ game.genre }} • {{ game.year }}</template>

          <template #actions>
            <v-btn color="error" @click.stop="toggleFavorite(game.id)">
              {{ $t('games.removeFavorite') }}
            </v-btn>
          </template>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BaseCard from '../components/BaseCard.vue'

export default {
  components: { BaseCard },
  computed: {
    ...mapGetters(['favoriteGames'])
  },
  methods: {
    ...mapActions(['toggleFavorite'])
  }
}
</script>