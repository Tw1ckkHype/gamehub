<template>
  <v-container>
    <v-text-field 
      v-model="search" 
      :label="$t('games.search')" 
      prepend-icon="mdi-magnify" 
      class="mb-6"
    ></v-text-field>

    <v-row>
      <v-col v-for="game in filteredGames" :key="game.id" cols="12" sm="6" md="4">
        <BaseCard :image="game.image">
          
          <!-- Title Slot -->
          <template #title>
            {{ game.title }}
          </template>

          <!-- Subtitle Slot -->
          <template #subtitle>
            {{ game.genre }} • {{ game.year }}
          </template>

          <!-- Default Content Slot -->
          <p class="text-body-2">{{ game.description }}</p>

          <!-- Actions Slot -->
          <template #actions>
            <v-btn color="primary" @click.stop="goToDetail(game.id)">
              {{ $t('games.detail') }}
            </v-btn>
            <v-btn 
              icon 
              :color="isFavorite(game.id) ? 'error' : 'grey'"
              @click.stop="toggleFavorite(game.id)"
            >
              ❤️
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