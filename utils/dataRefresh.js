export const getDataMixins = {
	data() {
		return {
			list: [],
			listText: false, // 是否显示列表尾部提示
			url: '',
			params: {},
			total: 0
		}
	},

	onPullDownRefresh() {
		this.list = []
		this.resetList();
		setTimeout(() => {
			uni.stopPullDownRefresh()
		}, 1000)
	},

	onReachBottom: function() {
		this.addlist();
	},

	methods: {
		getList(){
			var that = this
			this.list.concat([])
		},
		addlist(){
			if(this.list.length < this.total){
				this.params.pageNum = this.params.pageNum + 1;
				this.getList()
			}else{
				this.listText = true
				return
			}
		},
		// 下拉刷新，将页面重置为1
		resetList(){
			this.params.pageNum = 1;
			this.list = []
			this.getList()
		}
	}
}
