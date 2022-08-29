<template>
  <div class="sm:min-h-full" v-if="widthPhone">
    <router-view />
  </div>
  <div v-else class="flex items-center justify-center">
      Especially for mobile phone
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const widthPhone = ref(true);
const innerW = window.innerWidth
onMounted(() => {
  if (innerW > 500) {
    widthPhone.value = false
  }
})
</script>