<template>
  <v-app>
    <v-app-bar color="primary" elevation="4">
      <v-toolbar-title class="font-weight-bold">🎮 GameHub</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text :to="{ name: 'home' }">{{ $t('nav.home') }}</v-btn>
      <v-btn text :to="{ name: 'games' }">{{ $t('nav.catalog') }}</v-btn>
      <v-btn text :to="{ name: 'favorites' }">{{ $t('nav.favorites') }}</v-btn>
      <v-btn text :to="{ name: 'about' }">{{ $t('nav.about') }}</v-btn>

      <v-btn 
        text 
        @click="switchLocale"
        class="ml-4"
      >
        {{ locale === 'ru' ? '🇬🇧 EN' : '🇷🇺 RU' }}
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer color="primary" class="text-center py-4">
      © 2026 GameHub — {{ $t('common.footer') }}
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    locale() {
      return this.$i18n.locale
    }
  },
  methods: {
    switchLocale() {
      this.$i18n.locale = this.$i18n.locale === 'ru' ? 'en' : 'ru'
    }
  }
}
</script>