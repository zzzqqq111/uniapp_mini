<template>
	<picker @change="bindPickerChange" @columnchange="columnChange" :range="array" range-key="name" :value="value" mode="multiSelector">
		<slot></slot>
	</picker>
</template>

<script>
	import addressData from "../../static/js/data.js"
	let selectVal = []
	export default {
		data(){
			return {
				array: [],
				index: 0,
				value: [0,0,0]
			}
		},
		methods: {
			bindPickerChange(){
				
			},
			columnChange(){}
		}
	}
</script>

<style>
</style>