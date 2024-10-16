<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useMutation, useQuery } from '@tanstack/vue-query'
import { ref, watch } from 'vue'

import type { UserDetailsAction } from '~/components/user-details.vue'
import UserDetails from '~/components/user-details.vue'
import UserDetailsHeader from '~/components/user-details-header.vue'
import { getUser, patchUser } from '~/api/fetchers'

const route = useRoute()
const router = useRouter()

const userId = +route.params.id

if (!userId) void router.push('/')

const { data } = useQuery({
  queryKey: ['user', userId],
  queryFn: () => getUser(userId),
})

const {
  mutate,
  isSuccess,
  data: mutationData,
} = useMutation({
  mutationFn: patchUser,
})

const isDialogOpen = ref(isSuccess.value)

watch(isSuccess, () => {
  if (isSuccess.value) isDialogOpen.value = true
})

const editUser: UserDetailsAction = ({ firstName, lastName }) => {
  mutate({
    id: userId,
    first_name: firstName,
    last_name: lastName,
  })
}
</script>

<template>
  <section class="d-flex flex-column ga-4">
    <user-details-header>Update user</user-details-header>

    <div v-if="data">
      <user-details
        :action="editUser"
        :default-first-name="data.data.first_name"
        :default-last-name="data.data.last_name"
        :default-avatar="data.data.avatar"
      />
    </div>
  </section>

  <v-dialog v-model="isDialogOpen">
    <v-card>
      <template #title> Succesfully updated user </template>

      <template #text>
        <p>{{ mutationData?.first_name }} {{ mutationData?.last_name }}</p>
      </template>

      <template #actions>
        <v-btn color="red" variant="elevated" @click="isDialogOpen = false">
          Close
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
