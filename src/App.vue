<template>
  <v-app>
    <v-app-bar color="primary" elevation="4">
      <v-toolbar-title class="font-weight-bold">🎮 GameHub</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Главная</v-btn>
      <v-btn text to="/games">Каталог</v-btn>
      <v-btn text to="/about">О нас</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer color="primary" class="text-center py-4">
      © 2026 GameHub — Лучший каталог видеоигр
    </v-footer>
  </v-app>
</template>