<template>
	<div>
		<div class="el-col el-col-6 el-col-sm-12">
			<div>江苏天圣评估管理系统</div>
			<div><img src="" alt=""></div>
			<div>
				<el-button type="primary" @click="jumpToTs()">跳转</el-button>
			</div>
		</div>
		<div class="el-col el-col-6 el-col-sm-12">
			<div>江苏天圣评估审核系统</div>
			<div><img src="" alt=""></div>
			<div>
				<el-button type="primary" @click="jumpToSh()">跳转</el-button>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data () {
		return {}
	},
	methods: {
		jumpToTs () {
			window.open("http://fcpgpre.jstspg.com/ts/", '_blank')
		},
		jumpToSh () {
			window.open("http://fcpgpre.jstspg.com/sh/", '_blank')
		}	
	}
}
</script>

<style>
</style>
