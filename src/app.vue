<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>

<template>
  <div class="d-flex flex-column align-lg-center w-100 h-screen">
    <main style="max-width: 1100px; margin: auto; padding: 8px; width: 100%">
      <router-view />
    </main>
  </div>

  <vue-query-devtools />
</template>
