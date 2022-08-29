<script setup lang="ts">
import { ChevronLeft, CartSvg, PlusSvg, MinusSvg } from '../assets/svg'
import { Klipartz26 } from '../assets/images'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const counter = ref<number>(1);
function clickBack(){
	router.back()
}
function incrementCounter(){
	counter.value += 1
}
function decrementCounter(){
	counter.value -= 1
}
</script>

<template>
	<div class="sm:mx-2">
		<div class="sm:mt-5 sm:flex sm:justify-between sm:mx-2">
			<img :src="ChevronLeft" @click="clickBack" />
			<img :src="CartSvg" />
		</div>
		<img :src="Klipartz26" style="width:354px;height:375px;" />
		<div class="sm:bg-[#F3F3F3] sm:w-full sm:h-full sm:rounded-lg sm:pl-5 sm:pb-5">
			<div class="sm:flex sm:flex-row sm:items-center sm:py-5">
				<div class="sm:bg-[black] sm:w-5 sm:h-0.5 sm:mr-2"></div>
				<span>Best Choice</span>
			</div>
			<div class="sm:flex sm:justify-between">
				<div style="font-size:24px;">Succulent Plant</div>
				<div class="sm:bg-[#00B761] sm:pr-5 sm:pl-2 sm:text-[white] sm:items-center sm:flex sm:rounded-tl-full sm:rounded-bl-full">$39.99</div>
			</div>
			<h1 class="sm:font-bold sm:my-5">About</h1>
			<span style="font-size:14px;" class="sm:font-light">Succulent Plantis one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.</span>
			<div class="sm:mt-5 sm:flex sm:justify-between sm:pr-5">
				<div class="sm:flex sm:flex-row sm:items-center">
					<button @click="decrementCounter" class="sm:border-2 sm:px-1 sm:border-[black]">
						<img :src="MinusSvg"/>
					</button>
					<span class="sm:mx-2">{{ counter }}</span>
					<button @click="incrementCounter" class="sm:border-2 sm:px-1 sm:border-[black]">
						<img :src="PlusSvg"/>
					</button>
				</div>
				<button class="sm:text-[white] sm:bg-[#00B761] sm:px-16 sm:py-2 sm:rounded-full">Buy</button>
			</div>
		</div>
	</div>
</template>