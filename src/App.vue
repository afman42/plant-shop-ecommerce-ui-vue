<template>
  <div class="sm:min-h-full" v-if="widthPhone">
    <router-view />
    <BottomNavigator v-if="router.currentRoute.value.fullPath === '/'" />
  </div>
  <div v-else class="flex items-center justify-center">
      Especially for mobile phone
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import BottomNavigator from './components/BottomNavigator.vue'
const widthPhone = ref(true);
const router = useRouter();
const innerW = window.innerWidth
onMounted(() => {
  if (innerW > 500) {
    widthPhone.value = false
  }
})
</script>