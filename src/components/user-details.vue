<script setup lang="ts">
import { ref } from 'vue'

export type UserDetailsAction = (payload: {
  firstName: string
  lastName: string
}) => void

const { defaultFirstName = '', defaultLastName = '' } = defineProps<{
  defaultFirstName?: string
  defaultLastName?: string
  defaultAvatar?: string
  action: UserDetailsAction
}>()

const firstName = ref(defaultFirstName)
const lastName = ref(defaultLastName)
</script>

<template>
  <div class="d-flex flex-column flex-md-row justify-md-space-between ga-4">
    <v-card
      class="w-100 h-100 d-flex flex-column justify-space-between"
      style="height: 250px !important; flex-basis: 150%"
    >
      <template #text>
        <div class="d-flex flex-column flex-lg-row ga-2">
          <v-text-field
            v-model="firstName"
            label="First Name"
            variant="outlined"
            hide-details
          />

          <v-text-field
            v-model="lastName"
            label="last Name"
            variant="outlined"
            hide-details
          />
        </div>
      </template>

      <template #actions>
        <v-btn
          color="primary"
          variant="elevated"
          @click="() => action({ firstName, lastName })"
        >
          Update Details
        </v-btn>
      </template>
    </v-card>

    <v-card
      class="w-100 h-100 d-flex flex-column justify-space-between"
      style="height: 250px !important"
    >
      <template #text>
        <div class="d-flex justify-center">
          <v-avatar size="128">
            <v-img
              v-if="defaultAvatar"
              :src="defaultAvatar"
              width="128"
              height="128"
            />

            <v-icon v-else icon="mdi-account-circle" size="128" />
          </v-avatar>
        </div>
      </template>

      <template #actions>
        <v-btn color="primary" block prepend-icon="mdi-camera">
          Change Photo
        </v-btn>
      </template>
    </v-card>
  </div>
</template>
