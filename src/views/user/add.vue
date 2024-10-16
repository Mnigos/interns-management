<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query'
import { ref, watch } from 'vue'

import { postUser } from '~/api/fetchers'
import type { UserDetailsAction } from '~/components/user-details.vue'
import UserDetails from '~/components/user-details.vue'
import UserDetailsHeader from '~/components/user-details-header.vue'

const { mutate, isSuccess, data } = useMutation({
  mutationFn: postUser,
})

const isDialogOpen = ref(isSuccess.value)

watch(isSuccess, () => {
  if (isSuccess.value) isDialogOpen.value = true
})

const createUser: UserDetailsAction = ({ firstName, lastName }) => {
  mutate({
    first_name: firstName,
    last_name: lastName,
  })
}
</script>

<template>
  <section>
    <user-details-header>Add user</user-details-header>

    <user-details :action="createUser" />
  </section>

  <v-dialog v-model="isDialogOpen">
    <v-card>
      <template #title> Succesfully created user </template>

      <template #text>
        <p>{{ data?.first_name }} {{ data?.last_name }}</p>
      </template>

      <template #actions>
        <v-btn color="red" variant="elevated" @click="isDialogOpen = false">
          Close
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
