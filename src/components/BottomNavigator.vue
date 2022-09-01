<template>
<section
  class="sm:block sm:fixed sm:bottom-0 sm:inset-x-0 sm:z-50 sm:shadow-lg sm:bg-white sm:rounded-[25px] sm:mx-4 sm:mb-1">
  <div id="tabs" class="sm:flex sm:justify-between sm:p-5">
      <img :src="HomeMenuSvg"/>
      <img :src="LoveMenuSvg" />
      <img :src="BellMenuSvg" />
      <img :src="PersonMenuSvg" />
  </div>
</section>
</template>

<script setup lang="ts">
import { 
  BellMenuSvg,
  HomeMenuSvg,
  LoveMenuSvg,
  PersonMenuSvg,
} from '../assets/svg'
</script>