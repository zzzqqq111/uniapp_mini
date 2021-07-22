<template>
	<scroll-view>
		<view v-for="item in dataSource">
			<view>
				<image src=''></image>
				<view>
					<view>此处显示title</view>
					<view>此处显示desc</view>
					<view>销售量：11件</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			dataSource: {
				type: Array,
				value: []
			},
		}, 
		data(){
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
