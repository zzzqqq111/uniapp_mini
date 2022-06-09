<template>
	<view class="container">
		<scroll-view class="scoll_body" scroll-y="true" @scrolltolower="loadMore" @scroll="onScoll" @scrolltoupper="">
			<view class="address_select flex" v-for="(item, index) in dataList">
				<view class="middle">
					<text>{{item.title}}</text>
					<text>{{item.name}}&nbsp;&nbsp;{{item.mobile}}</text>
				</view>
				<navigator url="">
					<view class="edit_class">编辑{{index+1}}</view>
				</navigator>
			</view>
		</scroll-view>
		<button @click="GoAddressEdit" class="edit_button">新建地址</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [{
					id: 1,
					title: "北京市北京市朝阳区汾河天元7幢707",
					name: '可可',
					mobile: '15703412890'
				},{
					id: 2,
					title: "北京市北京市朝阳区汾河天元7幢707",
					name: '可可',
					mobile: '15703412890'
				},{
					id: 3,
					title: "北京市北京市朝阳区汾河天元7幢707",
					name: '可可',
					mobile: '15703412890'
				},{
					id: 4,
					title: "北京市北京市朝阳区汾河天元7幢707",
					name: '可可',
					mobile: '15703412890'
				},
				{
					id: 5,
					title: "北京市北京市朝阳区汾河天元7幢707",
					name: '可可',
					mobile: '15703412890'
				},
				{
					id: 6,
					title: "北京市北京市朝阳区汾河天元7幢707",
					name: '可可',
					mobile: '15703412890'
				},
				// {
				// 	id: 7,
				// 	title: "北京市北京市朝阳区汾河天元7幢707",
				// 	name: '可可',
				// 	mobile: '15703412890'
				// },
				],
			}
		},
		methods: {
			GoAddressEdit(){
				uni.navigateTo({
					url: "/pages/address/address_edit"
				})
			},
			onScoll(e){
				
			},
			loadMore(){
				console.log("到底不了")
			}
		}
	}
</script>
<style>
	.container{
		padding: 0;
		height: 100vh;
		background-color: #f6f7f8;
	}
	.address_select{
		background: #fff;
		border-bottom: solid 2rpx #f1efec;
		padding: 32rpx;
		box-sizing: border-box;
	}
	.middle text{
		display: block;
	}
	.middle text:nth-child(2){
		margin-top: 32rpx;
	}
	.edit_class{
		width: 70rpx;
	}
	.edit_button{
		position: absolute;
		bottom: 30rpx;
		left: 0;
		right: 0;
		margin: auto;
		width: 650rpx;
		z-index: 1;
		background-color: #353535;
		font-size: 28rpx;
		color: #fff;
		border-radius: 20px;
	}
	.scoll_body{
		height: calc(100vh - 130rpx)
	}
</style>

