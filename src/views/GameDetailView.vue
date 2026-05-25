<template>
  <v-container v-if="game" class="py-8">
    <v-btn to="/games" color="primary" class="mb-6">← Назад в каталог</v-btn>
    <v-row>
      <v-col cols="12" md="5">
        <v-img :src="game.image" height="420" cover class="rounded"></v-img>
      </v-col>
      <v-col cols="12" md="7">
        <h1 class="text-h3">{{ game.title }}</h1>
        <p class="text-h5 text-grey">{{ game.genre }} • {{ game.year }}</p>
        <p class="mt-6 text-body-1">{{ game.description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return { game: null }
  },
  created() {
    const id = parseInt(this.$route.params.id)
    const games = [
      { id: 1, title: "The Witcher 3", genre: "RPG", year: 2015, image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg", description: "Вы — Геральт из Ривии, наемный убийца чудовищ. Вы путешествуете по миру, в котором бушует война и на каждом шагу подстерегают чудовища. Вам предстоит выполнить заказ и найти Цири — Дитя Предназначения, живое оружие, способное изменить облик этого мира." },
      { id: 2, title: "Cyberpunk 2077", genre: "Action RPG", year: 2020, image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg", description: "Cyberpunk 2077 — приключенческая ролевая игра с открытым миром, действие которой происходит в футуристическом мегаполисе Найт-Сити, где выше всего ценятся власть, роскошь и модификации тела." },
      { id: 3, title: "Elden Ring", genre: "Action", year: 2022, image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg", description: "НОВЫЙ ФЭНТЕЗИЙНЫЙ РОЛЕВОЙ БОЕВИК. Восстань, погасшая душа! Междуземье ждёт своего повелителя. Пусть благодать приведёт тебя к Кольцу Элден." },
      { id: 4, title: "Baldur's Gate 3", genre: "RPG", year: 2023, image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg", description: "Соберите отряд и вернитесь в Забытые Королевства. Вас ждет история о дружбе и предательстве, выживании и самопожертвовании, о сладком зове абсолютной власти." }
    ]
    this.game = games.find(g => g.id === id)
  }
}
</script>