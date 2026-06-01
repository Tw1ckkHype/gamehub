<template>
  <v-container class="text-center py-16">
    <h1 class="text-h2 font-weight-bold mb-6">{{ $t('home.title') }}</h1>
    <p class="text-h5 mb-10">{{ $t('home.subtitle') }}</p>
    <v-btn to="/games" color="primary" size="x-large">
      {{ $t('home.button') }}
    </v-btn>
  </v-container>
</template>