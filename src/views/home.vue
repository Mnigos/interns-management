<script setup lang="ts">
import { useMutation, useQuery } from '@tanstack/vue-query'
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { deleteUser, getListUsers } from '~/api/fetchers'

const route = useRoute()
const router = useRouter()

const defaultPage = computed(() => (route.query.page ? +route.query.page : 1))
const page = ref(defaultPage.value)

const { data } = useQuery({
  queryKey: ['users', page],
  queryFn: () => getListUsers(page.value),
})

const search = ref('')
const users = computed(() =>
  data.value?.data.filter(user =>
    user.first_name.toLowerCase().includes(search.value.toLowerCase())
  )
)

const { mutate, isSuccess } = useMutation({
  mutationFn: deleteUser,
})

const isDialogOpen = ref(isSuccess.value)

watch(page, () => {
  if (page.value !== defaultPage.value)
    void router.push({ query: { page: page.value } })
})

watch(isSuccess, () => {
  if (isSuccess.value) isDialogOpen.value = true
})
</script>

<template>
  <header>
    <h1 style="padding: 12px 0">User list</h1>
  </header>

  <v-card>
    <template #text>
      <div class="d-flex justify-space-between ga-2">
        <v-text-field
          v-model="search"
          label="Search for users..."
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
        />

        <v-btn to="/user/add" style="height: 56px" color="primary">
          Add user
        </v-btn>
      </div>
    </template>

    <v-table v-if="data">
      <thead>
        <tr>
          <th style="width: 10%" />
          <th class="font-weight-bold">Full Name</th>
          <th class="font-weight-bold">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="{ id, first_name, last_name, avatar } in users" :key="id">
          <td>
            <v-avatar :text="first_name.at(0)">
              <v-img :alt="first_name" :src="avatar" />
            </v-avatar>
          </td>

          <td>{{ first_name }} {{ last_name }}</td>

          <td>
            <v-btn icon variant="plain" :to="`/user/${id}/update`">
              <v-icon icon="mdi-square-edit-outline" />
            </v-btn>

            <v-btn icon variant="plain" @click="() => mutate(id)">
              <v-icon icon="mdi-delete-outline" />
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>

  <v-pagination :length="data?.total_pages" v-model="page" />

  <v-dialog v-model="isDialogOpen">
    <v-card>
      <template #title> Succesfully deleted user </template>

      <template #actions>
        <v-btn color="red" variant="elevated" @click="isDialogOpen = false">
          Close
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
