<template>
	<div class="sm:mx-5">
		<div class="sm:flex sm:justify-between sm:mt-4">
			<span class="sm:font-semibold sm:text-2xl">Welcome to</span>
			<img :src="svgAssets.CartSvg" />
		</div>	
		<div class="sm:mt-1 sm:text-[#00B761] sm:text-4xl">Plant Shop</div>
		<div class="sm:flex sm:justify-between sm:mt-7">
			<div class="sm:bg-[#F1F1F1] sm:flex sm:flex-row sm:rounded-lg" style="width:294px;">
				<img :src="svgAssets.SearchSvg" class="sm:py-2 sm:pl-1" />
				<input type="text" class="sm:bg-[#F1F1F1] sm:pl-2 sm:rounded-lg sm:mr-3 focus:outline-none" placeholder="Search" />
			</div>	
			<div class="sm:bg-[#00B761] sm:rounded-lg sm:px-3 sm:py-3 sm:ml-5" style="width:50px;height:50px;">
				<img :src="svgAssets.SlidersMenu">
			</div>	
		</div>
		<div class="sm:flex sm:flex-row sm:mt-5">
			<div 
				v-for="(item,index) in category"
				:class="{
					'sm:text-[#00B761]': index === 0,
					'sm:text-[#000]': index != 0,
					'sm:ml-5': index != 0,
					'sm:pb-1': index === 0
				}" style="font-size:14px;">
				{{ item.nameCategory }}
				<div v-if="index === 0" class="sm:w-5 sm:h-0.5 sm:bg-[#00B761]"></div>
			</div>
		</div>
		<div class="sm:columns-2 sm:mt-5">
			<div v-for="(item,index) in plant" 
			class="sm:mr-2 sm:mb-3 sm:rounded-lg sm:bg-top sm:bg-center sm:bg-no-repeat"
			:style="{
				backgroundImage: `url(${item.image})`,
				width:  '150px',
				height: index == 1 || index == 2 ? '236px' :'184px',
				backgroundColor: '#F3F3F3',
				backgroundSize: index == 1 || index == 2 ? '99px 149px' : '132px 113px',
			}"
			>
				<div class="sm:grid sm:px-3 sm:py-3 sm:content-between" :class="{
					'sm:gap-20': index !== 1 && index !== 2,
					'sm:gap-32': index === 1 || index === 2
				}">
					<div class="sm:flex sm:justify-end" @click="() => clickLoveButton(index)">
						<img :src="svgAssets.LovePinkSvg" v-if="item.loveButton"  />
						<img :src="svgAssets.LoveOriginalSvg" v-else />
					</div>
					<div class="sm:flex sm:justify-between" @click="clickRouter">
						<div class="sm:flex sm:flex-col">
							<span style="font-size:14px;">{{ item.namePlant }}</span>
							<span style="font-size:16px;">${{ item.price }}</span>
						</div>	
						<div class="sm:flex sm:items-end" @click="() => clickAddButton(index)">
							<img :src="svgAssets.AddGreenSvg" v-if="item.addButton"  />
							<img :src="svgAssets.AddOriginalSvg" v-else />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as svgAsset from '../assets/svg'
import { plants, Categories} from '../assets'
export default defineComponent({
	name: 'RootPage',
	data(){
		return {
			svgAssets: svgAsset,
			plant: plants,
			category: Categories
		}
	},
	methods: {
		clickLoveButton(index: number){
			let data = [...this.plant];
			data[index].loveButton = !data[index].loveButton
			this.plant = data
		},
		clickAddButton(index: number){
			let data = [...this.plant];
			data[index].addButton = !data[index].addButton
			this.plant = data
		},
		clickRouter(){
			this.$router.push('/detail')	
		}
	}
})
</script>

<style scoped>

.wrapperScroll {
    overflow: auto;
    white-space: nowrap;
    overflow-y: hidden;
}

.wrapperScroll::-webkit-scrollbar {
    display: none;
}
</style>