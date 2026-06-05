<template>
  <v-card class="base-card" hover :elevation="4">
    
    <!-- Header Slot -->
    <div v-if="$slots.header" class="base-card__header">
      <slot name="header"></slot>
    </div>

    <!-- Image / Default Slot -->
    <slot name="image">
      <v-img 
        v-if="image" 
        :src="image" 
        height="200" 
        cover
      ></v-img>
    </slot>

    <!-- Content Slot -->
    <v-card-title>
      <slot name="title"></slot>
    </v-card-title>

    <v-card-subtitle>
      <slot name="subtitle"></slot>
    </v-card-subtitle>

    <!-- Main Content -->
    <v-card-text>
      <slot></slot>
    </v-card-text>

    <!-- Actions Slot -->
    <v-card-actions>
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.base-card {
  transition: all 0.3s ease;
  height: 100%;
}
.base-card:hover {
  transform: translateY(-8px);
}
.base-card__header {
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
}
</style>