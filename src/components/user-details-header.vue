<template>
  <header
    class="d-flex flex-column flex-lg-row justify-space-between align-center"
  >
    <h1 style="padding: 12px 0"><slot /></h1>

    <v-btn variant="outlined" color="primary" to="/">Back to user list</v-btn>
  </header>
</template>
