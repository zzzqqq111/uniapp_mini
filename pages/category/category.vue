<template>
	<view class="cate-content">
		<!-- 左侧分类 -->
		<scroll-view class="cate-left" scroll-y="true" :style="{height: `${scrollHeight}px`}">
			<text v-for="(item, index) in list" :key='index' class="type-nav" :class="{selected: curIndex === index}" @click="handleSelectNav(index)">
				{{item.name}}
			</text>
		</scroll-view>
		<!-- 右侧 -->
		<scroll-view class="cate-right" :style="{height: `${scrollHeight}px`}" scroll-y="true">
			<view v-if="list[curIndex]" class="cate-content-box">
				<view class="flex-three" v-for="(item, idx) in list[curIndex].children" :key="idx">
					<view class="cate-img">
						<image v-if="item.image" :src="item.image"></image>
					</view>
					<text>{{ item.name }}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollHeight: 0,
				curIndex: 0,
				list: [{
						id: 1,
						name: '手机数码',
						children: [{
								id: 2,
								name: '小米',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 3,
								name: '华为',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 4,
								name: 'OPPO',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 5,
								name: '苹果',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 6,
								name: 'Vivo',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 6,
								name: 'Vivo',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 6,
								name: 'Vivo',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 6,
								name: 'Vivo',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 6,
								name: 'Vivo',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 6,
								name: 'Vivo',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 6,
								name: 'Vivo',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},{
								id: 6,
								name: 'Vivo',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},{
								id: 6,
								name: 'Vivo',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},{
								id: 6,
								name: 'Vivo',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},{
								id: 6,
								name: 'Vivo',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},{
								id: 6,
								name: 'Vivo',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},{
								id: 6,
								name: 'Vivo',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},{
								id: 6,
								name: 'Vivo',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},{
								id: 6,
								name: 'Vivo',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},{
								id: 6,
								name: 'Vivo',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							}
							
						]
					},
					{
						id: 11,
						name: '家用电器',
						children: [{
								id: 12,
								name: '荣盛',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 13,
								name: '海尔',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 14,
								name: '美的',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 15,
								name: '松下',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 16,
								name: '西门子',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
						]
					},
					{
						id: 21,
						name: '汽车用品',
						children: [{
								id: 22,
								name: '行车记录仪',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 23,
								name: '机油',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 24,
								name: '汽车水枪',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 25,
								name: '挂件',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 26,
								name: '轮胎',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
						]
					},
					{
						id: 11,
						name: '家用电器',
						children: [{
								id: 12,
								name: '荣盛',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 13,
								name: '海尔',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 14,
								name: '美的',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 15,
								name: '松下',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 16,
								name: '西门子',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
						]
					},
					{
						id: 11,
						name: '家用电器',
						children: [{
								id: 12,
								name: '荣盛',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 13,
								name: '海尔',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 14,
								name: '美的',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 15,
								name: '松下',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 16,
								name: '西门子',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
						]
					},
					{
						id: 11,
						name: '家用电器',
						children: [{
								id: 12,
								name: '荣盛',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 13,
								name: '海尔',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 14,
								name: '美的',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 15,
								name: '松下',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 16,
								name: '西门子',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
						]
					},
					{
						id: 11,
						name: '家用电器',
						children: [{
								id: 12,
								name: '荣盛',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 13,
								name: '海尔',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 14,
								name: '美的',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 15,
								name: '松下',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 16,
								name: '西门子',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
						]
					},
					{
						id: 11,
						name: '家用电器',
						children: [{
								id: 12,
								name: '荣盛',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 13,
								name: '海尔',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 14,
								name: '美的',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 15,
								name: '松下',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 16,
								name: '西门子',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
						]
					},
					{
						id: 11,
						name: '家用电器',
						children: [{
								id: 12,
								name: '荣盛',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 13,
								name: '海尔',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 14,
								name: '美的',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 15,
								name: '松下',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 16,
								name: '西门子',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
						]
					},
					{
						id: 11,
						name: '家用电器',
						children: [{
								id: 12,
								name: '荣盛',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 13,
								name: '海尔',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 14,
								name: '美的',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 15,
								name: '松下',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 16,
								name: '西门子',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
						]
					},
					{
						id: 11,
						name: '家用电器',
						children: [{
								id: 12,
								name: '荣盛',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 13,
								name: '海尔',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 14,
								name: '美的',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 15,
								name: '松下',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 16,
								name: '西门子',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
						]
					},
					{
						id: 11,
						name: '家用电器',
						children: [{
								id: 12,
								name: '荣盛',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 13,
								name: '海尔',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 14,
								name: '美的',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 15,
								name: '松下',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 16,
								name: '西门子',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
						]
					},
					{
						id: 11,
						name: '家用电器',
						children: [{
								id: 12,
								name: '荣盛',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 13,
								name: '海尔',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 14,
								name: '美的',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 15,
								name: '松下',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 16,
								name: '西门子',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
						]
					},
					{
						id: 11,
						name: '家用电器',
						children: [{
								id: 12,
								name: '荣盛',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 13,
								name: '海尔',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 14,
								name: '美的',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 15,
								name: '松下',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 16,
								name: '西门子',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
						]
					},
					{
						id: 11,
						name: '家用电器',
						children: [{
								id: 12,
								name: '荣盛',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 13,
								name: '海尔',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 14,
								name: '美的',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 15,
								name: '松下',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 16,
								name: '西门子',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
						]
					},
					{
						id: 11,
						name: '家用电器',
						children: [{
								id: 12,
								name: '荣盛',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 13,
								name: '海尔',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 14,
								name: '美的',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 15,
								name: '松下',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 16,
								name: '西门子',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
						]
					},
					{
						id: 11,
						name: '家用电器',
						children: [{
								id: 12,
								name: '荣盛',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 13,
								name: '海尔',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 14,
								name: '美的',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 15,
								name: '松下',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
							{
								id: 16,
								name: '西门子',
								image: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg'
							},
						]
					},
				]
			}
		},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad() {
			const app = this
			// 设置分类列表高度
			app.setListHeight()
		},


		methods: {
			/**
			 * 设置分类列表高度
			 */
			setListHeight() {
				const app = this
				uni.getSystemInfo({
					success(res) {
						app.scrollHeight = res.windowHeight
					}
				})
			},
			
			handleSelectNav(index){
				this.curIndex = index
			}
		}
	}
</script>

<style>
	.cate-content {
		width: 100%;
		display: flex;
	}

	.cate-left {
		flex-direction: column;
		display: flex;
		width: 200rpx;
		color: #444;
		height: 100%;
		background: #f8f8f8;
	}

	.cate-right {
		display: flex;
		flex-direction: column;
		width: 550rpx;
		height: 100%;
		overflow: hidden;
		font-size: 26rpx;
		/* padding: 32rpx 0; */
	}

	.type-nav {
		position: relative;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		z-index: 10;
		display: block;
		font-size: 26rpx;
	}

	.type-nav.selected {
		background: #fff;
		color: #fa2209;
		border-right: none;
		font-size: 28rpx;
	}

	.cate-img image {
		width: 100%;
		height: 130rpx;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
	}
	
	.cate-content-box{
		padding: 24rpx 0 ;
	}

	.flex-three {
		width: 33%;
		display: inline-block;
		text-align: center;
		margin-bottom: 24rpx;
	}
</style>
