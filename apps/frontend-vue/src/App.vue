<script setup lang="ts">
import { ref } from 'vue'
import { api } from '@/api'
import { Schemas } from '$db'

const users = ref<(typeof Schemas.UserSchema.static)[]>([])

async function requestUsers() {
  const usersResponse = await api.users.get()
  if (!usersResponse.error) {
    users.value = usersResponse.data.data
  }
}
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Users:
    {{ users }}
  </p>
  <button @click="requestUsers">尝试请求数据</button>
</template>

<style scoped></style>
